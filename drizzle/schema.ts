import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const portfolioCases = mysqlTable("portfolio_cases", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 180 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  kicker: text("kicker").notNull(),
  summary: text("summary").notNull(),
  context: text("context").notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  methods: text("methods").notNull(),
  outcomes: text("outcomes").notNull(),
  tags: text("tags").notNull(),
  cover: varchar("cover", { length: 120 }).notNull().default("protest"),
  link: varchar("link", { length: 1024 }),
  featured: int("featured").notNull().default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PortfolioCaseRow = typeof portfolioCases.$inferSelect;
export type InsertPortfolioCase = typeof portfolioCases.$inferInsert;
