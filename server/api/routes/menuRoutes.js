const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");
const User = require("../models/User");

//get all menu item from db
router.get("/", menuControllers.getAllMenuItems);
router.post("/", menuControllers.postMenuItem);
router.get("/:id", menuControllers.singleMenuItem);
router.patch("/:id", menuControllers.updateMenuItem);
router.delete("/:id", menuControllers.deleteMenuItem);

module.exports = router;
