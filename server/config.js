// server/config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.ATLAS_URI,
    // Add other configuration variables here
};
