import Comment from '../models/Comment.js';


export const createComment = async (req, res) => {
    const { post_id, content } = req.body;
    const author_id = req.user.userId; 

    try {
        const comment = new Comment({ post_id, content, author_id });
        await comment.save();
        res.status(201).send(comment); 
    } catch (error) {
        res.status(500).send({ error: 'Server error' }); 
    }
};




export const getComments = async (req, res) => {
    const { post_id } = req.query; 

    try {
        const comments = await Comment.find({ post_id }).populate('author_id', 'username');
        res.send(comments); 
    } catch (error) {
        res.status(500).send({ error: 'Server error' }); 
    }
};


export const getSingleComment = async (req, res) => {
    const { id } = req.params; 

    try {
        const comment = await Comment.findById(id).populate('author_id', 'username'); 
        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' }); 
        }
        res.send(comment); 
    } catch (error) {
        res.status(500).send({ error: 'Server error' }); 
    }
};


export const updateComment = async (req, res) => {
    const { id } = req.params; 
    const { content } = req.body;

    try {
        const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' }); 
        }
        res.send(comment); 
    } catch (error) {
        res.status(500).send({ error: 'Server error' }); 
    }
};


export const deleteComment = async (req, res) => {
    const { id } = req.params; 

    try {
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).send({ error: 'Comment not found' });
        }
        res.send({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Server error' }); 
    }
};