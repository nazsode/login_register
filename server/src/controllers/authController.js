const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const register = async (req, res) => {
  console.log("here");
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const existingUser = await User.findOne({ username });

    console.log("existing user", existingUser);

    if (existingUser) {
      return res.status(400).send("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed Password", hashedPassword);

    const newUser = new User({ username, password: hashedPassword });
    console.log("new User", newUser);

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = { login, register };
