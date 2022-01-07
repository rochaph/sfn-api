import { ArticleEntity } from "../../domain/article";
import { ArticleRepository } from "../ports/ArticleRepository";

export default class CreateArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public handle(article: ArticleEntity): ArticleEntity {
    return article;
  }
}
