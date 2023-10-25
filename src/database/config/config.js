require("dotenv").config();
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  };
}
