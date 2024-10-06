// server/controllers/userController.js
const User = require('../models/User');

// Increment the user's days count
exports.resetDays = async (req, res) => {
    try {
        const userId = req.user.id; // Obtained from auth middleware
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.days = 0; // Reset days to 0
        await user.save();

        res.status(200).json({ days: user.days, msg: 'Day count reset successfully' });
    } catch (error) {
        console.error('Error in resetDays:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Get User Profile
exports.getUserProfile = async (req, res) => {
    console.log('Inside getUserProfile'); // Log to check if method is called
    try {
        const userId = req.user.id;
        console.log('Fetching profile for user ID:', userId); // Log the user ID
        const user = await User.findById(userId).select('-password'); // Exclude password

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.status(200).json({ userData: user, msg: 'User profile fetched successfully' });
    } catch (error) {
        console.error('Error in getUserProfile:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};


