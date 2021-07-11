require("./db/config");
const morgan = require("morgan");
const express = require("express");
const User = require("./components/user/user.route");
const err = require("./middlewares/errorHandler");

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/api/users", User);
  app.use(err);
};
