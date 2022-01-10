import { Request, Response, Router } from "express";
import {
  CreatableArticle,
  UpdatableArticle,
} from "../../../application/article/ports/article-repository";
import { validate } from "../middlewares/validation";
import ArticleService from "../services/article.service";
import {
  validateCreateArticle,
  validateGetAllArticles,
  validateUpdateArticle,
} from "../validations/articles.validation";
import { validaIdRequired } from "../validations/common.validation";
import Controller from "./controller";

export default class ArticleController implements Controller {
  public namespace = "/articles";

  private router: Router;
  private service: ArticleService;

  constructor(service: ArticleService) {
    this.router = Router();
    this.service = service;
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.get(
      "/",
      validate("query", validateGetAllArticles),
      this.listAll
    );

    this.router.get("/:id", validate("params", validaIdRequired), this.findOne);

    this.router.post("/", validate("body", validateCreateArticle), this.create);

    this.router.put(
      "/:id",
      validate("params", validaIdRequired),
      validate("body", validateUpdateArticle),
      this.update
    );

    this.router.delete(
      "/:id",
      validate("params", validaIdRequired),
      this.delete
    );
  }

  private listAll = async (
    req: Request & {
      query: { start: string; limit: string; newest: string; title?: string };
    },
    res: Response
  ): Promise<Response> => {
    const { start, limit, newest, title } = req.query;
    const articles = await this.service.findAllArticles(
      parseInt(start),
      parseInt(limit),
      newest === "true",
      title
    );
    return res.status(200).json(articles);
  };

  private findOne = async (
    req: Request & { params: { id: string } },
    res: Response
  ): Promise<Response> => {
    const { id } = req.params;

    const article = await this.service.findArticleById(parseInt(id));
    if (!article) return res.status(404).json("Not found");

    return res.status(200).json(article);
  };

  private create = async (
    req: Request & { body: CreatableArticle },
    res: Response
  ): Promise<Response> => {
    this.service.createArticle(req.body);

    return res.status(201).end();
  };

  private update = async (
    req: Request & {
      params: { id: string };
      body: Omit<UpdatableArticle, "id">;
    },
    res: Response
  ): Promise<Response> => {
    const { id } = req.params;

    const article = await this.service.findArticleById(parseInt(id));
    if (!article) return res.status(404).json("Not found");

    await this.service.updateArticle({ id: parseInt(id), ...req.body });

    return res.status(204).end();
  };

  private delete = async (
    req: Request & { params: { id: string } },
    res: Response
  ): Promise<Response> => {
    const { id } = req.params;

    const article = await this.service.findArticleById(parseInt(id));
    if (!article) return res.status(404).json("Not found");

    await this.service.deleteArticle(parseInt(id));

    return res.status(204).end();
  };

  get Router(): Router {
    return this.router;
  }
}
