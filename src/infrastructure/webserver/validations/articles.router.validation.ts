import { param } from "express-validator";

export default {
  validateGetArticle: [param("id").isInt()],
};
