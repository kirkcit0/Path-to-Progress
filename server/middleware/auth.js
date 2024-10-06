// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config'); // Assuming you have a config.js for environment variables

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ msg: 'No token provided, authorization denied' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        // Attach user to the request object
        req.user = await User.findById(decoded.user.id).select('-password'); // Exclude password

        if (!req.user) {
            return res.status(401).json({ msg: 'User not found, authorization denied' });
        }

        console.log('Authenticated user:', req.user); // Log authenticated user
        console.log(req.param.username)
        next();
    } catch (error) {
        console.error('Authentication middleware error:', error.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};



module.exports = auth;
