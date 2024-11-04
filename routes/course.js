const { Router } = require("express");
const courseRouter = Router();

// display all the courses
courseRouter.get("/courses", function (req, res) {
  res.json({
    message: "signup success",
  });
});

// when the user wants to purchase a course
courseRouter.get("/purchase", function (req, res) {
  res.json({
    message: "signup success",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
