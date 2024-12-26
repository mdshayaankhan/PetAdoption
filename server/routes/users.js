const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // Validate user input
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send({ message: "User with this email already exists" });
    }

    // Generate hash for the password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user and save to the database
    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save();

    // Send success response
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error in user creation:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
