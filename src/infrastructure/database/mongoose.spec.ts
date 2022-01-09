import db from "./mongoose";
import mongoose from "mongoose";

jest.mock("mongoose", () => ({
  connect: jest.fn(),
  connection: { on: jest.fn() },
}));

describe("mongoose", () => {
  test("should call connect", async () => {
    const spy = jest.spyOn(mongoose, "connect");
    await db.init();
    expect(spy).toBeCalledTimes(1);
  });

  test("should log after connection", async () => {
    const spy = jest.spyOn(console, "log");
    await db.init();
    expect(spy).toBeCalledWith("Connected to MongoDB database!");
  });
});
