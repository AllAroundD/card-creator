require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const history = require("connect-history-api-fallback");

const config = require("./config");
const { connectDB, disconnectDB } = require("./utils/dbUtils");
// const PORT = process.env.PORT || 3001
const PORT = config.port;
const app = express();

// middleware defined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(history());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// connect to DB
const db = connectDB();

// if app terminated, disconnect DB
process.on("SIGINT", function () {
  disconnectDB();
});

// Add routes, both API and view
app.use(routes);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Cross-Origin-Embedder-Policy", "require-corp");
//   res.header("Cross-Origin-Opener-Policy", "same-origin");
//   next();
// });

// send all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app listener
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
