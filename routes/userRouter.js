const express = require("express");
const userController = require("../controller/userController");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/profile", isAuthenticated ,userController.profile);

module.exports = router;
