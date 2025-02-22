CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"record_name" varchar(255) NOT NULL,
	"analysis_result" varchar(255) NOT NULL,
	"kanban_records" varchar(255) NOT NULL,
	"created_by" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"location" varchar(255) NOT NULL,
	"folders" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"treatment_counts" integer NOT NULL,
	"folder" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"created_by" varchar(255) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
