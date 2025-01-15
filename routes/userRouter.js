const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/register", userController.register);

router.get("/login", userController.login);

router.get("/profile", userController.profile);

module.exports = router;
