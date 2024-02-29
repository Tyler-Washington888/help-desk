const mongoose = require('mongoose') 
const db = process.env.MONGO_URI
 
const connectDB = async () => {
    try{
        await mongoose.connect(db);
    }
    catch (error) {
        process.exit(1)
    }
}


module.exports = connectDB