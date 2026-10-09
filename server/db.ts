import { asc, desc, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertPortfolioCase, InsertUser, PortfolioCaseRow, portfolioCases, users } from "../drizzle/schema";
import { seedCases, PortfolioCase } from "../shared/cases";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) throw new Error("Database is not available");

  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};
  const textFields = ["name", "email", "loginMethod"] as const;
  type TextField = (typeof textFields)[number];
  const assignNullable = (field: TextField) => {
    const value = user[field];
    if (value === undefined) return;
    const normalized = value ?? null;
    values[field] = normalized;
    updateSet[field] = normalized;
  };
  textFields.forEach(assignNullable);

  if (user.lastSignedIn !== undefined) {
    values.lastSignedIn = user.lastSignedIn;
    updateSet.lastSignedIn = user.lastSignedIn;
  }
  if (user.role !== undefined) {
    values.role = user.role;
    updateSet.role = user.role;
  } else if (user.openId === ENV.ownerOpenId) {
    values.role = "admin";
    updateSet.role = "admin";
  }
  if (!values.lastSignedIn) values.lastSignedIn = new Date();
  if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

const parseList = (value: string) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(item => typeof item === "string") : [];
  } catch {
    return value.split(",").map(item => item.trim()).filter(Boolean);
  }
};

const mapCase = (row: PortfolioCaseRow): PortfolioCase => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  kicker: row.kicker,
  summary: row.summary,
  context: row.context,
  role: row.role,
  methods: parseList(row.methods),
  outcomes: parseList(row.outcomes),
  tags: parseList(row.tags),
  cover: row.cover,
  link: row.link ?? undefined,
  featured: Boolean(row.featured),
});

const toInsert = (input: Omit<PortfolioCase, "id">): InsertPortfolioCase => ({
  slug: input.slug,
  title: input.title,
  kicker: input.kicker,
  summary: input.summary,
  context: input.context,
  role: input.role,
  methods: JSON.stringify(input.methods),
  outcomes: JSON.stringify(input.outcomes),
  tags: JSON.stringify(input.tags),
  cover: input.cover || "protest",
  link: input.link || null,
  featured: input.featured ? 1 : 0,
});

export async function seedPortfolioCases() {
  const db = await getDb();
  if (!db) return;
  const existing = await db.select({ count: sql<number>`count(*)` }).from(portfolioCases);
  if (Number(existing[0]?.count ?? 0) > 0) return;
  await db.insert(portfolioCases).values(seedCases.map(toInsert));
}

export async function listPortfolioCases() {
  const db = await getDb();
  if (!db) return seedCases;
  const rows = await db.select().from(portfolioCases).orderBy(desc(portfolioCases.featured), asc(portfolioCases.id));
  return rows.map(mapCase);
}

export async function getPortfolioCaseBySlug(slug: string) {
  const db = await getDb();
  if (!db) return seedCases.find(item => item.slug === slug);
  const rows = await db.select().from(portfolioCases).where(eq(portfolioCases.slug, slug)).limit(1);
  return rows[0] ? mapCase(rows[0]) : undefined;
}

export async function createPortfolioCase(input: Omit<PortfolioCase, "id">) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const result = await db.insert(portfolioCases).values(toInsert(input));
  return getPortfolioCaseBySlug(input.slug).then(value => value ?? { ...input, id: Number(result[0].insertId) });
}

export async function updatePortfolioCase(id: number, input: Omit<PortfolioCase, "id">) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.update(portfolioCases).set(toInsert(input)).where(eq(portfolioCases.id, id));
  const rows = await db.select().from(portfolioCases).where(eq(portfolioCases.id, id)).limit(1);
  return rows[0] ? mapCase(rows[0]) : undefined;
}

export async function deletePortfolioCase(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.delete(portfolioCases).where(eq(portfolioCases.id, id));
}
