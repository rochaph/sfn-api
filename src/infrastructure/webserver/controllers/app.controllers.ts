import { Request, Response, Router } from "express";
import Controller from "./controller";

export default class AppController implements Controller {
  public namespace = "/";
  private router: Router;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get("/", this.welcomeMessage);
  }

  private welcomeMessage(req: Request, res: Response) {
    res.status(200).send("Fullstack Challenge 2021 🏅 - Space Flight News");
  }

  get Router(): Router {
    return this.router;
  }
}
