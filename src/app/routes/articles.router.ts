import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import validate from "./articles.router.validation";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json("ok");
});

router.get(
  "/:id",
  validate.validateGetArticle,
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.json("ok" + JSON.stringify(errors));
  }
);

export default router;
