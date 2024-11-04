const express = require("express");
const app = express();
const port = 3000;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup success",
  });
});

app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin success",
  });
});

// display all the courses
app.get("/courses", function (req, res) {
  res.json({
    message: "signup success",
  });
});

// display the user's purchased courses
app.get("/user/purchases", function (req, res) {
  res.json({
    message: "signup success",
  });
});

// when the user wants to purchase a course
app.get("/course/purchase", function (req, res) {
  res.json({
    message: "signup success",
  });
});

app.listen(port);
