const { User } = require("../models/User");
const express = require("express");

const router = express.Router();

// gets user data
 router.get("/:email", async (req, res) => {
try {
  const userData = await User.findOne({email: req.params.email});

  res.status(200).json({ userData: userData, message: "Login Successful!"})
    
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Internal Server Error"})
  }
})

// const { incrementDays } = require('../controllers/userController');
// const { authenticate } = require('../middleware/auth'); // Assuming you have authentication middleware

// router.patch('/incrementDays', authenticate, incrementDays); // PATCH method for updating

module.exports = router;
