const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
try {
    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log("Sucessfully connected to the database")
} catch (error) {
    console.log("Error connecting to database")
    console.log(error);
}
}

module.exports = connectDB;