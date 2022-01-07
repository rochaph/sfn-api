import mongoose from "mongoose";
import dotenv from "dotenv";
import { DataBase } from "./database";

dotenv.config();

const db: DataBase = {
  init: async function () {
    try {
      await mongoose.connect(`${process.env.MONGO_URL}`);
      console.log("Connected to MongoDB database!");
    } catch (error) {
      console.log("Connection error: ", error);
    }
  },
};

export default db;
