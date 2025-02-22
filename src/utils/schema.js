import { sql } from "drizzle-orm";
import { integer, varchar, pgTable, serial, text } from "drizzle-orm/pg-core";

// users schema
export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),  // ✅ Ensure max length is defined
  age: integer("age").notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  folders: text("folders")
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  treatmentCounts: integer("treatment_counts").notNull(),
  folder: text("folder")
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  createdBy: varchar("created_by", { length: 255 }).notNull(),
});

// records schema
export const Records = pgTable("records", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  recordName: varchar("record_name", { length: 255 }).notNull(),
  analysisResult: varchar("analysis_result", { length: 255 }).notNull(),
  kanbanRecords: varchar("kanban_records", { length: 255 }).notNull(),
  createdBy: varchar("created_by", { length: 255 }).notNull(),
});
