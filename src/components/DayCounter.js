// server/controllers/DayCounter.js
const User = require('../models/User');

// Function to increment days
exports.incrementDays = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you're using middleware to get the logged-in user's ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.days += 1; // Increment the day count
        await user.save();

        res.status(200).json({ message: 'Days incremented successfully', days: user.days });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
