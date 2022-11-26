const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    profileimg:{
      type:String,
      default:"uploads/",
    },
    img: {
      type:String,
      default:"uploads/"
    },
    time:{
      type:String,
      unique:true,
    },
    userName: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Post", PostSchema);

module.exports = model;
