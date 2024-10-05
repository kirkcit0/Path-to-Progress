// server/cron/cronJob.js
const cron = require('node-cron');
const User = require('../models/User');

// Schedule a job to increment days for all users at midnight (00:00) every day
cron.schedule('0 0 * * *', async () => {
    try {
        // Find all users and increment their days count
        const users = await User.updateMany({}, { $inc: { days: 1 } });
        console.log(`Successfully incremented days for all users.`);
    } catch (error) {
        console.error('Error in cron job:', error.message);
    }
});
