import dotenv from "dotenv";
import express from "express";
import { DataBase } from "../../database/database";
import importArticlesCron from "../../cron/import.cron";
import setupMiddlewares from "./middlewares";
import setupDependencies from "./register";

dotenv.config();

export const setup = async (database: DataBase) => {
  await database.init();
  importArticlesCron.start();
  const app = express();
  setupMiddlewares(app);
  setupDependencies(app);
  return app;
};
