import { Schema, model } from "mongoose";
import { ArticleParams } from "../../../application/article/domain/article";

const schema = new Schema<ArticleParams>(
  {
    id: { type: Number, required: true },
    featured: { type: Boolean, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: String, required: true },
    launches: [
      {
        type: {
          id: String,
          provider: String,
        },
      },
    ],
    events: [
      {
        type: {
          id: String,
          provider: String,
        },
      },
    ],
  },
  { autoIndex: true }
);

export const ArticleModel = model<ArticleParams>("Article", schema);
