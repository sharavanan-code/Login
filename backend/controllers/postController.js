import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
};
