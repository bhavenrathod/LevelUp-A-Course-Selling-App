const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "admin signup success",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "admin signin success",
  });
});

// course creation
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "course creation",
  });
});

// update course
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "course creation",
  });
});

// get all course
adminRouter.get("/course/all", function (req, res) {
  res.json({
    message: "course creation",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
