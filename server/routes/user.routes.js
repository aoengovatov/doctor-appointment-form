const express = require("express");
const userRouter = express.Router({ mergeParams: true });
const userController = require("../controllers/user.controller");

userRouter.post("/login", userController.loginUser);
userRouter.post("/", userController.addUser);

module.exports = userRouter;
