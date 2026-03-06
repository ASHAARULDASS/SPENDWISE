const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

/*const { MongoClient } = require("mongodb");

async function connectDB() {
  const uri = "mongodb://localhost/spendwise";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected successfully!");
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

module.exports = connectDB;*/