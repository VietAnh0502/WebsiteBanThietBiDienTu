import knex from 'knex';
import { Model } from 'objection';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Cấu hình knex
const knexInstance = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '12345678',
    database: process.env.DB_DATABASE || 'THUONGMAIDIENTU',
    multipleStatements: true
  },
  pool: { min: 0, max: 10 }
});

// Thiết lập knex cho Objection.js
Model.knex(knexInstance);

export default knexInstance;
