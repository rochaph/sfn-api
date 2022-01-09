import { json, urlencoded } from "body-parser";
import compression from "compression";
import { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { swaggerSpec } from "../middlewares/swagger";

export default (app: Express): void => {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.use(compression());
  app.use(morgan("combined"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
