const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, author: req.user.userId });  // Use userId here
  try {
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send('Error creating post');
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
};
