import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validate = (key: keyof Request, schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[key]);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    return next();
  };
};
