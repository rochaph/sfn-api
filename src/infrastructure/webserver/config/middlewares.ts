import { json, urlencoded } from "body-parser";
import compression from "compression";
import { Express } from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../middlewares/swagger";

export default (app: Express): void => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(compression());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
