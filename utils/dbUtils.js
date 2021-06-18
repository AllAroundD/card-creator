const mongoose = require("mongoose");
const config = require("../config");
const db = config.dbUrl;

// function to connect to DB
const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(
      `MongoDB connected for ${
        process.env.NODE_ENV === "production" ? "production" : "development"
      }...`
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// function to disconnect DB if app terminated
const disconnectDB = async () => {
  try {
    mongoose.connection.close(() => {
      console.log("MongoDB disconnected through app termination");
      process.exit(0);
    });
  } catch (err) {
    console.error("Failed to disconnect DB");
  }
};

module.exports = { connectDB, disconnectDB };
