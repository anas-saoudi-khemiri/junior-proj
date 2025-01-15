const express = require("express");
const Router = express.Router();
const {
  getAllmotos,
  addmoto,
  updatemoto,
  deletemoto,
  togglemoto,
  getusermoto,
} = require("../controllers/moto.controllers");
// const verifyToken = require("../middlleware/auth");
// Router.get("/", verifyToken, getAllmotos);
Router.get("/",getAllmotos);
Router.post("/",addmoto);
Router.put("/:id",updatemoto);
Router.delete("/:id",deletemoto);
Router.patch("/:id", togglemoto);
Router.get("/:user_Id",getusermoto);

module.exports = Router;