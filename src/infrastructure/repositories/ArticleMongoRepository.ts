import { ArticleModel } from "../database/models/article.model";
import { ArticleRepository } from "../../application/ports/ArticleRepository";
import { ArticleEntity } from "../../domain/article";

export default class ArticleMongoRepository implements ArticleRepository {
  async findAll() {
    const articles = (await ArticleModel.find()
      .limit(10)
      .exec()) as ArticleEntity[];
    return articles;
  }

  async find(id: number) {
    const article = (await ArticleModel.findOne({
      id,
    }).exec()) as ArticleEntity;

    return article;
  }
}
