const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Ignore self-signed certificate issue
    },
  },
  logging: false, // Optional: Disables logging for cleaner output
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connected to MySQL database!");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });

module.exports = sequelize;
