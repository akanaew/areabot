import dotenv from 'dotenv';
import pg from 'pg';
const {Pool} = pg;

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

export default pool;
