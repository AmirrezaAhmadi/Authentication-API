const asyncHandler = require("express-async-handler");

const userController = {
  register: asyncHandler(async (req, res) => {}),

  login: asyncHandler(async (req, res) => {}),

  profile: asyncHandler(async (req, res) => {}),
};

module.exports = userController;
