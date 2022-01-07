import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import ArticleService from "../services/article.service";
import validate from "../validations/articles.router.validation";

class ArticleController {
  router: Router;
  service: ArticleService;

  constructor(router: Router, service: ArticleService) {
    this.router = router;
    this.service = service;
  }

  private setListAll() {
    this.router.get("/", async (req, res) => {
      const articles = await this.service.getAll();
      res.json(articles);
    });
  }

  private setGetOne() {
    this.router.get(
      "/:id",
      validate.validateGetArticle,
      async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;

        const article = await this.service.getArticleById(parseInt(id));
        res.json(article);
      }
    );
  }

  build() {
    this.setListAll();
    this.setGetOne();
    return this.router;
  }
}

const router = Router();
const service = new ArticleService();
const controller = new ArticleController(router, service).build();

export default controller;
