const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const userController = {
  register: asyncHandler(async (req, res) => {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill all fields");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400);
        throw new Error("Invalid email format");
      }

      if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be at least 6 characters");
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const userCreated = await User.create({
        username,
        password: hashedPassword,
        email,
      });

      const token = jwt.sign({ id: userCreated._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      res.status(201).json({
        message: "User registered successfully",
        id: userCreated.id,
        email: userCreated.email,
        username: userCreated.username,
        token,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }),

  login: asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        res.status(401);
        throw new Error("Invalid Credentials");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401);
        throw new Error("Invalid Credentials");
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      res.json({
        message: "Login Successful",
        token,
        id: user._id,
        email: user.email,
        username: user.username,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }),

  profile: asyncHandler(async (req, res) => {
    try {
      const userData = await User.findById(req.user).select("-password");
      if (!userData) {
        res.status(404);
        throw new Error("User not found");
      }
      res.json({ user: userData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }),
};

module.exports = userController;
