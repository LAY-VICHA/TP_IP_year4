const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testing',{
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log("Mongo connected~");
    } catch (err) {
        console.log("Mongoose: ",err);
    }
} 