import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import {
  createPortfolioCase,
  deletePortfolioCase,
  getPortfolioCaseBySlug,
  listPortfolioCases,
  seedPortfolioCases,
  updatePortfolioCase,
} from "./db";

const caseInput = z.object({
  slug: z.string().min(2).max(180).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(2).max(255),
  kicker: z.string().min(2),
  summary: z.string().min(2),
  context: z.string().min(2),
  role: z.string().min(2).max(255),
  methods: z.array(z.string().min(1)).min(1),
  outcomes: z.array(z.string().min(1)).min(1),
  tags: z.array(z.string().min(1)).min(1),
  cover: z.string().min(2).max(120),
  link: z.string().url().optional().or(z.literal("")),
  featured: z.boolean(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  portfolio: router({
    list: publicProcedure.query(async () => {
      await seedPortfolioCases();
      return listPortfolioCases();
    }),
    bySlug: publicProcedure.input(z.object({ slug: z.string() })).query(({ input }) => getPortfolioCaseBySlug(input.slug)),
    create: adminProcedure.input(caseInput).mutation(({ input }) => createPortfolioCase(input)),
    update: adminProcedure.input(caseInput.extend({ id: z.number().int().positive() })).mutation(({ input }) => {
      const { id, ...values } = input;
      return updatePortfolioCase(id, values);
    }),
    remove: adminProcedure.input(z.object({ id: z.number().int().positive() })).mutation(({ input }) => deletePortfolioCase(input.id)),
  }),
});

export type AppRouter = typeof appRouter;
