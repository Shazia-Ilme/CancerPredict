import { pgTable, serial, varchar, integer, foreignKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	username: varchar("username", { length: 255 }).notNull(),
	age: integer("age").notNull(),
	location: varchar("location", { length: 255 }).notNull(),
	folders: text("folders").default('RRAY[').array().notNull(),
	treatment_counts: integer("treatment_counts").notNull(),
	folder: text("folder").default('RRAY[').array().notNull(),
	created_by: varchar("created_by", { length: 255 }).notNull(),
});

export const records = pgTable("records", {
	id: serial("id").primaryKey().notNull(),
	user_id: integer("user_id").notNull().references(() => users.id),
	record_name: varchar("record_name", { length: 255 }).notNull(),
	analysis_result: varchar("analysis_result", { length: 255 }).notNull(),
	kanban_records: varchar("kanban_records", { length: 255 }).notNull(),
	created_by: varchar("created_by", { length: 255 }).notNull(),
});