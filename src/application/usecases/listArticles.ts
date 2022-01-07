import { ArticleEntity } from "../../domain/article";
import { ArticleRepository } from "../ports/ArticleRepository";

export default class ListArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(): Promise<ArticleEntity[]> {
    return await this.repository.findAll();
  }
}
