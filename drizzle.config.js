export default {
    dialect: "postgresql",
    schema: "./src/utils/schema.js",
    out: "./drizzle",
    dbCredentials: {
      url: "postgresql://neondb_owner:npg_kX6Dzp9wEWOB@ep-cool-queen-a1skvfdb-pooler.ap-southeast-1.aws.neon.tech/cancer_predict?sslmode=require",
      connectionString:"postgresql://neondb_owner:npg_kX6Dzp9wEWOB@ep-cool-queen-a1skvfdb-pooler.ap-southeast-1.aws.neon.tech/cancer_predict?sslmode=require",
    },
  };