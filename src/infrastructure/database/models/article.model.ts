import { Schema, model } from "mongoose";
import { ArticleParams } from "../../../application/article/domain/article";

const schema = new Schema<ArticleParams>(
  {
    id: { type: Number, index: true, unique: true },
    featured: { type: Boolean, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    launches: [
      {
        type: {
          id: String,
          provider: String,
        },
        default: [],
      },
    ],
    events: [
      {
        type: {
          id: String,
          provider: String,
        },
        default: [],
      },
    ],
  },
  { timestamps: true, autoIndex: true }
);

schema.pre("save", async function (next) {
  try {
    const last = await model<ArticleParams>("Article", schema)
      .findOne()
      .sort({ id: "desc" });

    if (!last) {
      this.id = 1;
      next();
    } else {
      this.id = last.id + 1;
      next();
    }
  } catch (e) {
    next(e as Error);
  }
});

export const ArticleModel = model<ArticleParams>("Article", schema);
