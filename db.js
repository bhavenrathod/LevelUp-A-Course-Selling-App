const { Schema, default: mongoose } = require("mongoose");
mongoose.connect(
  "mongodb+srv://bhavenrathod:Ep1YRKp21MZdTsb9@cluster0.31t3k.mongodb.net/"
);
const user = require("./routes/user");
const course = require("./routes/course");
const ObjectId = mongoose.ObjectId;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const creatorSchema = Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const courseSchema = Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = Schema({
  courseId: ObjectId,
  creatorId: ObjectId,
});

// corresponding Data models
const userModel = mongoose.model("users", userSchema);
const creatorModel = mongoose.model("creator", creatorSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel: userModel,
  creatorModel: creatorModel,
  courseModel: courseModel,
  purchaseModel: purchaseModel,
};
