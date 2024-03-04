const express = require("express");
const userRouter = express.Router({ mergeParams: true });
const userController = require("../controllers/user.controller");

userRouter.get("/", userController.getUser);

module.exports = userRouter;
