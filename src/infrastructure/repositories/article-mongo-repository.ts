import { ArticleModel } from "../database/models/article.model";
import {
  ArticleRepository,
  CreatableArticle,
  UpdatableArticle,
} from "../../application/article/ports/article-repository";
import Article from "../../application/article/domain/article";

export default class ArticleMongoRepository implements ArticleRepository {
  async findAll(
    offset: number,
    limit: number,
    newest: boolean,
    title?: string
  ): Promise<Article[]> {
    const filters: { title?: { $regex: string } } = {};

    if (title) {
      filters.title = { $regex: `.*${title}.*` };
    }

    const articles = await ArticleModel.find(filters)
      .sort({ publishedAt: newest ? "desc" : "asc", id: "asc" })
      .skip(offset)
      .limit(limit);

    const result = articles.map((article) => new Article(article));
    return result;
  }

  async findById(id: number): Promise<Article | null> {
    const article = await ArticleModel.findOne({ id }).sort("id");
    if (!article) return article;
    return new Article(article);
  }

  async create(article: CreatableArticle): Promise<void> {
    await ArticleModel.create(article);
  }

  async update(article: UpdatableArticle): Promise<void> {
    await ArticleModel.findOneAndUpdate({ id: article.id }, article);
  }

  async delete(id: number): Promise<void> {
    await ArticleModel.findOneAndDelete({ id });
  }
}
