const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(err);
    // console.error(err.message);
    // exit proccess with failure
    process.exit(1);
  }
};

module.exports = connectDB;