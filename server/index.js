// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config'); // Import configuration
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
// const postRoutes = require('./routes/post');
const cronJob = require('./cron/cronjob');
const threadRoutes = require('./routes/threadroutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/threads', threadRoutes);
// app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process with failure
    });


// eslint-disable-next-line no-unused-expressions
cronJob;

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
