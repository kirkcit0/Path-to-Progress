const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { authenticate } = require('../middleware/auth'); // Assuming you have authentication middleware

// Create a new post
router.post('/', authenticate, createPost); // Requires authentication

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Update a post
router.patch('/:id', authenticate, updatePost); // Requires authentication

// Delete a post
router.delete('/:id', authenticate, deletePost); // Requires authentication

module.exports = router;
