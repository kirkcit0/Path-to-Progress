// server/routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Correct import without destructuring
const auth = require('../middleware/auth'); // Importing auth middleware
const { resetDays, getUserProfile } = require('../controllers/userController'); // Import controllers

// Get user data by username (protected route)
router.get("/:username", async (req, res) => {
  try {
      const userData = await User.findOne({ username: req.params.username }).select('-password'); // Exclude password
      if (!userData) {
          return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ userData, message: "User data retrieved successfully!" });
  } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
  }
});



// Protected route to increment days
router.patch('/resetDays', auth, resetDays);

// (Optional) Protected route to get user profile
router.get('/profile', auth, getUserProfile);

module.exports = router;
