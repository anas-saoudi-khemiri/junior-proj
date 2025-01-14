const express = require("express");
const Router = express.Router();
const {
  getAllusers,
  adduser,
  updateuser,
  deleteuser,
  getoneusers,
//   toggleuser,
} = require("../controllers/user.controllers");
// const verifyToken = require("../middlleware/auth");
// Router.get("/", verifyToken, getAllusers);
Router.get("/",getAllusers);
Router.post("/",adduser);
Router.put("/:id",updateuser);
Router.delete("/:id",deleteuser);
Router.get("/:mail",getoneusers);
// Router.patch("/:id", verifyToken, toggleuser);

module.exports = Router;
