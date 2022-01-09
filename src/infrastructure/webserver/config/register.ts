import { Express } from "express";
import ArticleMongoRepository from "../../repositories/article-mongo-repository";
import AppController from "../controllers/app.controllers";
import ArticleController from "../controllers/articles.controller";
import Controller from "../controllers/controller";
import ArticleService from "../services/article.service";

const appController = new AppController();

const articleService = new ArticleService(new ArticleMongoRepository());
const articleController = new ArticleController(articleService);

const controllers: Controller[] = [appController, articleController];

export default (app: Express): void => {
  controllers.forEach((controller) => {
    app.use(controller.namespace, controller.Router);
  });
};
