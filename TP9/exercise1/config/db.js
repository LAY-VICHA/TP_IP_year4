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


//EXERCISE 1

//first 
//config: by connect it to database
//then call/import it in index file(or main file)
//second
//create folder models (it is the folder that we should create table)
//step1: import mongoose
//step2: create schema
//step3: write our schema
//step4: export it in order for us to use in other folders/files
//third
//create services folder why=()
//create file register:
//step1: import model, 
//step2: export the file
//create function register as async() with parameter as the input of user
//create try catch to prevent error and check validation
//then create a new user and store it.
