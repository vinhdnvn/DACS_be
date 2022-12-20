const express = require("express");
const app = express();
// middleware
const morgan = require("morgan");
const bodyParser = require("body-parser");
let flash = require("connect-flash");
const cookieParser = require("cookie-parser");
var fs = require("fs");
var path = require("path");
// protect route
const { requireAuth, checkUser } = require("./api/middleware/authMiddleware");
// mongoose
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// here import link Routes
const eventRoutes = require("./api/routes/events");
const userRoutes = require("./api/routes/users");
const blogRoutes = require("./api/routes/blogs");
const authRoutes = require("./api/routes/authRoutes");

// connect to mongoose
mongoose.connect(
  "mongodb+srv://admin:admin@dacs.x9kwrxk.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

// use morgan middle ware
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});
app.get("*", checkUser);
// home page
app.get("/", checkUser, (req, res) => {
  res.render("home");
});

// routes which should handle request
// app.use("/events", eventRoutes);
app.use(eventRoutes);
app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);

// login,signup form
app.use(authRoutes);

// hanlde error of server
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
// connect view
app.use(flash());
app.set("view engine", "ejs");
app.set("views", "views");
// // current user
// app.get("*", checkUser);
module.exports = app;
