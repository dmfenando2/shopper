require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shopper", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
