import swaggerJSDoc, { Options } from "swagger-jsdoc";

const options: Options = {
  swaggerDefinition: {
    info: {
      title: "Space Flight News API",
      description: "Space Flight News Articles Information",
      version: "1",
    },
  },
  apis: ["../index.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
