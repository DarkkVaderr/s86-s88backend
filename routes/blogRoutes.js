const express = require('express');
const { createPost, getPosts } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// These routes are now mounted on /api/posts
router.post('/', protect, createPost);  // POST to /api/posts
router.get('/', getPosts);  // GET to /api/posts

module.exports = router;
