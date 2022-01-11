import swaggerJSDoc, { OAS3Options } from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const options: OAS3Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Space Flight News API",
      version: "1",
      description: "Space Flight News Articles Information",
    },
  },
  servers: [
    `http//localhost:${process.env.INTERNAL_PORT}`,
    `http//localhost:${process.env.EXTERNAL_PORT}`,
  ],
  apis: ["src/infrastructure/webserver/docs/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
