import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";
const sql = neon(
  "postgresql://neondb_owner:npg_QETmiob1Nv2c@ep-winter-snow-a1cnr1lr-pooler.ap-southeast-1.aws.neon.tech/CancerAI?sslmode=require"
);
export const db = drizzle(sql, { schema });