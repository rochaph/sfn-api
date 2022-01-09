import mongoose from "mongoose";
import dotenv from "dotenv";
import { DataBase } from "./database";
import { MongoDriverError } from "mongodb";

dotenv.config();

const db: DataBase = {
  init: async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URL}`);
      console.log("Connected to MongoDB database!");
      mongoose.connection.on("error", (error) => {
        console.error(error.message);
      });
    } catch (error) {
      console.error((error as MongoDriverError).message);
      setTimeout(db.init, 10000);
    }
  },
};

export default db;
