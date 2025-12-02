import type { MatchRecord, MatchReport } from "@v1/match/schemas";
import { Hono } from "hono";
import { describeRoute, resolver, validator } from "hono-openapi";

const app = new Hono();

export default app;
