import { ArticleEntity } from "../../domain/article";
import { ArticleRepository } from "../ports/ArticleRepository";

export default class UpdateArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public handle(id: number, data: Partial<ArticleEntity>): ArticleEntity {
    throw Error("NOT_IMPLEMENTED");
  }
}
