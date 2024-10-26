module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'your-database-name'),
      user: env('DATABASE_USERNAME', 'your-username'),
      password: env('DATABASE_PASSWORD', 'your-password'),
      ssl: {
        rejectUnauthorized: false, // تأكد من استخدام هذه الإعدادات إذا كانت SSL مطلوبة
      },
    },
  },
});
