import express from "express";
import dotenv from "dotenv";
import setupMiddlewares from "./middlewares";
import setupRoutes from "./routes";

dotenv.config();

export default {
  setup: function () {
    const app = express();
    setupMiddlewares(app);
    setupRoutes(app);
    return app;
  },
};
