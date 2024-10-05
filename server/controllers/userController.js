const User = require('../models/User');

// Increment the user's days count
exports.incrementDays = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you're using JWT and have middleware to populate req.user
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.days += 1; // Increment the days count
        await user.save();

        res.status(200).json({ days: user.days });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
