import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog_api');
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
    }
};

export default connectDB;