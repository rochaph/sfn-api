import { Express, Request, Response } from "express";
import articles from "../controllers/articles.controller";

export default (app: Express): void => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Fullstack Challenge 2021 🏅 - Space Flight News");
  });

  app.use("/articles", articles);
};
