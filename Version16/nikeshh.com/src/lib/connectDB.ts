import mongoose from "mongoose";

declare global {
    var mongoose: any
}

const MONGODB_URL = process.env.MONGODB_URL ?? "";

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: 'store'
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      console.log('Connected to the Database.');
      return mongoose;
    }).catch(err => console.error(err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;