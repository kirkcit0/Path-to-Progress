// server/routes/threadRoutes.js
const express = require('express');
const router = express.Router();
const Thread = require('../models/Thread'); // Import your Thread model

// Get threads based on addiction
router.get('/', async (req, res) => {
    const { addiction } = req.query;
    try {
        const threads = await Thread.find({ addiction }); // Adjust according to your data model
        res.json(threads);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching threads' });
    }
});

// Create a new thread
router.post('/', async (req, res) => {
    const { title, addiction } = req.body;

    try {
        const newThread = new Thread({
            title,
            addiction,
            replies: [] // Initialize with no replies
        });
        const savedThread = await newThread.save();
        res.status(201).json(savedThread);
    } catch (error) {
        res.status(500).json({ msg: 'Error creating thread' });
    }
});

module.exports = router;
