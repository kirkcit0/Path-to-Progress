// server/routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require('../middleware/auth'); // Importing auth middleware
const { resetDays, getUserProfile } = require('../controllers/userController');

// Get user data by username (protected route)
router.get("/:username", auth, async (req, res) => {
    try {
        const userData = await User.findOne({ username: req.user.username }).select('-password');
        if (!userData) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json({ userData, message: "User data retrieved successfully!" });
    } catch (error) {
        console.error('Error fetching user data:', error); // Use console.error for errors
        res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

// Protected route to increment days
router.patch('/resetDays', auth, resetDays);

// Protected route to get user profile
router.get('/profile', auth, getUserProfile);

module.exports = router;
