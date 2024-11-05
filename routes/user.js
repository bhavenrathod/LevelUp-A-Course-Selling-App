const { Router } = require("express"); // destructure the object here
const { userModel } = require("../db");

const userRouter = Router(); // use the function here

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "user signup success",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "user signin success",
  });
});

// display the user's purchased courses
userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "user purchased courses",
  });
});

module.exports = {
  userRouter: userRouter,
};
