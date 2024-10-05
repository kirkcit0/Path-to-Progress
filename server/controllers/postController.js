const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
    const { title, content } = req.body;

    try {
        const post = new Post({
            title,
            content,
            user: req.user.id // Assuming you're using middleware to get the logged-in user's ID
        });

        await post.save();
        res.status(201).json({ msg: 'Post created successfully', post });
    } catch (error) {
        console.error('Error in createPost:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username'); // Populate user field
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error in getAllPosts:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('user', 'username');

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error('Error in getPostById:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    const { title, content } = req.body;

    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // Check if the user is the owner of the post
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        post.title = title;
        post.content = content;

        await post.save();
        res.status(200).json({ msg: 'Post updated successfully', post });
    } catch (error) {
        console.error('Error in updatePost:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        // Check if the user is the owner of the post
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await post.remove();
        res.status(200).json({ msg: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error in deletePost:', error.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

