import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === 'prod'
      ? Postgres.DATABASE_URL
      : process.env.DB_URL,
});

export default pool;
