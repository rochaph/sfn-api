import { setup } from "./app";
import db from "../../database/mongoose";
import importArticlesCron from "../../cron/import.cron";
import setupMiddlewares from "./middlewares";
import setupDependencies from "./register";

jest.mock("../../database/mongoose");
jest.mock("./middlewares");
jest.mock("./register.ts");

jest.mock("node-cron", () => {
  return {
    schedule: () => ({
      start: jest.fn(),
    }),
  };
});

describe("app", () => {
  test("should call db.init", async () => {
    const spy = jest.spyOn(db, "init");
    await setup(db);
    expect(spy).toBeCalledTimes(1);
  });

  test("should call importArticlesCron.start", async () => {
    const spy = jest.spyOn(importArticlesCron, "start");
    await setup(db);
    expect(spy).toBeCalledTimes(1);
  });

  test("should call setupMiddleware", async () => {
    await setup(db);
    expect(setupMiddlewares).toBeCalledTimes(1);
  });

  test("should call setupDependencies", async () => {
    await setup(db);
    expect(setupDependencies).toBeCalledTimes(1);
  });
});
