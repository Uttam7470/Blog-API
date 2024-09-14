import Post from '../models/Post.js';

export const createPost = async (req, res) => {
    const { title, content } = req.body;
    const author_id = req.user.userId;

    try {
        const post = new Post({ title, content, author_id });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author_id', 'username');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getSinglePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id).populate('author_id', 'username');
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.send({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};