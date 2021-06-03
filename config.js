const config = {
  dbUrl:
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL
      : "mongodb://localhost:27017/CardCreator",
  port: process.env.NODE_ENV === "production" ? process.env.PORT : 3001,
};

module.exports = config;
