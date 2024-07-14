const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://JawedMirza:jawed@cluster0.qq607sv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true, // No longer needed
            useUnifiedTopology: true // No longer needed
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
