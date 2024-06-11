const express = require("express");
const Menu = require("../models/Carts");
const router = express.Router();

const cartController = require("../controllers/cartController");
const verifyToken=require('../middleware/verifyToken')

//get all menu item from db
router.get("/",verifyToken, cartController.getCartByEmail);

router.post("/", cartController.addToCart);

router.put("/:id", cartController.updateCart);

router.delete("/:id", cartController.deleteCart);

router.get("/:id", cartController.getSingleCart);

module.exports = router;
