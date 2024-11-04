const { Router } = require("express"); // destructure the object here

const userRouter = Router(); // use the function here

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup success",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin success",
  });
});

// display the user's purchased courses
userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "signup success",
  });
});

module.exports = {
  userRouter: userRouter,
};
