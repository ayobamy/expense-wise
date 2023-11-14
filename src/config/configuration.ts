export default () => ({
  http: {
    host: process.env.HTTP_HOST || 'localhost',
    port: parseInt(process.env.HTTP_PORT, 10) || 3000,
  },
  database: {
    dev: {
      username: process.env.HOST_USER,
      password: process.env.HOST_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      db: process.env.DATABASE_NAME || 'expense_wise_dev_db',
      uri: process.env.DB_URI ?? 'postgresql://localhost/expense_wise_dev_db',
    },
    test: {
      username: process.env.HOST_USER,
      password: process.env.HOST_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      db: process.env.DATABASE_NAME || 'test_db',
      uri: process.env.DB_URI ?? 'postgresql://localhost/test_db',
    },
    prod: {
      username: process.env.HOST_USER,
      password: process.env.HOST_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      db: process.env.DATABASE_NAME || 'expense_wise_db',
      uri: process.env.DB_URI ?? 'postgresql://localhost/expense_wise_db',
    },
  },
});
