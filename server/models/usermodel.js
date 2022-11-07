const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String },
    codechefID: { type: String },

    password: { type: String, required: true },
    quote: { type: String },
    tokens: [
      {
        token: {
          type: String, 
          required: true,
        },
      },
    ],
  },
  { collection: "user-data" }
);

//hashing
User.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

User.methods.generateAuthToken = async function () {
  try {
    let tokenabcd = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenabcd });
    await this.save();
    return tokenabcd;
  } catch (err) {
    console.log(err);
  }
};

const model = mongoose.model("UserData", User);

module.exports = model;
