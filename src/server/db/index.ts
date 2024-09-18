import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "../../../node_modules/@vercel/postgres/dist";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import * as schema from "./schema";
// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema });
