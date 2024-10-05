import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS for styling

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [message, setMessage] = useState('');
    const token = localStorage.getItem('token'); // Get the token from local storage

    const { title, content } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:5050/api/posts');
            setPosts(res.data);
        } catch (err) {
            console.error('Error fetching posts:', err);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:5050/api/posts',
                { title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Include token for authorization
                    }
                }
            );
            setPosts([...posts, res.data.post]); // Add new post to the list
            setMessage('Post created successfully');
            setFormData({ title: '', content: '' }); // Reset form
        } catch (err) {
            console.error('Error creating post:', err);
            setMessage('Failed to create post');
        }
    };

    useEffect(() => {
        fetchPosts(); // Fetch posts on component mount
    }, []);

    return (
        <div className="posts-container">
            <h2>Forum Posts</h2>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                />
                <textarea
                    placeholder="Content"
                    name="content"
                    value={content}
                    onChange={onChange}
                    required
                ></textarea>
                <button type="submit">Create Post</button>
            </form>
            <p className="message">{message}</p>

            <div className="post-list">
                {posts.map((post) => (
                    <div key={post._id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <small>By: {post.user.username}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
