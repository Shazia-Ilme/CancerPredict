import { relations } from "drizzle-orm/relations";
import { users, records } from "./schema";

export const recordsRelations = relations(records, ({one}) => ({
	user: one(users, {
		fields: [records.user_id],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	records: many(records),
}));