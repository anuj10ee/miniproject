const express = require("express");
const { countDocuments } = require("../models/usermodel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
// router.get("/", (req, res) => {
//   res.send("hello from another page");
// });
// router.get("/home", (req, res) => {
//   res.send("hello from another page 2");
// });

//cookie parser bhi install krna h

console.log("BLAHHHH");
router.post("/register", async (req, res) => {
  // console.log(abc);
  const { email, name, address, password } = req.body;
  console.log(name);
  // console.log(req.body);
  // console.log(xyz);

  if (!name || !email || !password || !address) {
    return res.status(422).json({ error: "FILL KROOOOO" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else {
      const user = new User({ name, email, address, password });

      await user.save();
      return res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
  // User.findOne({email:email})
  // .then((userExist)=>{
  //     if(userExist){
  //         return res.status(422).json({error:"EMAIL ALREADY EXIST"});
  //     }
  //     const user=new User({ name,email, password,quote});
  //     user.save().then(()=>{
  //         res.status(201).json({message: "user registered successfully"});
  //     }).catch((err)=>res.status(500).json({error:"FAILED TO REGISTERED"}));
  // }).catch(err=>{console.log(err);})
  // console.log(name);
  // console.log(email);
  // console.log(quote);

  res.json({ message: req.body });
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"hdkhk"})
  // console.log("djhjcs");

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("FILL KROOOOOOOOO");
    }

    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log("blah blah");
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      // res.use(cookieSession({
      //   name: 'session',
      //   keys: [/* secret keys */],

      //   // Cookie Options
      //   maxAge: 24 * 60 * 60 * 1000 // 24 hours
      // }))

      if (!isMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        // console.log(token);
        res.json({ message: "user logged in" });
      }
    } else {
      res.status(400).json({ error: "user error" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/editOptions", async (req, res) => {
  const { email, name, codechefID, codeforcesID } = req.body;
  console.log(name);

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      userExist.name = name;
      userExist.codechefID = codechefID;
      userExist.codeforcesID = codeforcesID;
      await userExist.save();
      res.status(201).json({ message: "user registered successfully" });
    } else {
      console.log("userNotFound");
    }
  } catch (err) {
    console.log(err);
  }
});
//home page

router.get("/home", authenticate, (req, res) => {
  console.log("HELLO FROM HOME");
  // res.send("HELLO WORLD FROM SERVER");
  console.log(req.rootUser);
  res.send(req.rootUser);
});
router.get("/profile", authenticate, (req, res) => {
  console.log("HELLO FROM Profile");
  // res.send("HELLO WORLD FROM SERVER");
  console.log(req.rootUser);
  res.send(req.rootUser);
});

router.get("/logout", (req, res) => {
  console.log("HELLO FROM logout");
  // res.send("HELLO WORLD FROM SERVER");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = router;
