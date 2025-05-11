const mongoose = require('mongoose');

const URL = '';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(URL);

        console.log("Connected to Backend Server (MongoDB)");

    } catch (error) {
        console.log(error);
    }
}


module.exports= connectToMongoDB;
