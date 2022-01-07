import { ArticleEntity } from "../../domain/article";
import { ArticleRepository } from "../ports/ArticleRepository";

export default class DeleteArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public handle(id: number): ArticleEntity {
    throw Error("NOT_IMPLEMENTED");
  }
}
