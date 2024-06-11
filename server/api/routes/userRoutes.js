const express = require("express");
const User = require("../models/User");
const router = express.Router();

const userControllers = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

//get all user item from db
router.get("/", verifyToken, verifyAdmin, userControllers.getAllUsers);
router.post("/", userControllers.createUser);
router.delete("/:id", verifyToken, verifyAdmin, userControllers.deleteUser);
router.get("/admin/:email", verifyToken, userControllers.getAdmin);
router.patch("/admin/:id", verifyToken, verifyAdmin, userControllers.makeAdmin);

module.exports = router;
