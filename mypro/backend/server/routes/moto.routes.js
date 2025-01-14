const express = require("express");
const Router = express.Router();
const {
  getAllmotos,
  addmoto,
  updatemoto,
  deletemoto,
//   togglemoto,
} = require("../controllers/moto.controllers");
// const verifyToken = require("../middlleware/auth");
// Router.get("/", verifyToken, getAllmotos);
Router.get("/",getAllmotos);
Router.post("/",addmoto);
Router.put("/:id",updatemoto);
Router.delete("/:id",deletemoto);
// Router.patch("/:id", verifyToken, togglemoto);

module.exports = Router;