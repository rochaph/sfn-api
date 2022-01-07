import { Schema, model } from "mongoose";
import { ArticleEntity } from "../../../domain/article";

const schema = new Schema<ArticleEntity>(
  {
    id: { type: Number, required: true },
    featured: { type: Boolean, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: String, required: true },
    launches: {
      type: [
        {
          id: String,
          provider: String,
        },
      ],
      default: undefined,
    },
    events: {
      type: [
        {
          id: String,
          provider: String,
        },
      ],
      default: undefined,
    },
  },
  { autoIndex: true }
);

export const ArticleModel = model<ArticleEntity>("Article", schema);
