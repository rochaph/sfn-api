import { ArticleEntity } from "../../domain/article";
import { ArticleRepository } from "../ports/ArticleRepository";

export default class GetArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(id: number): Promise<ArticleEntity> {
    return await this.repository.find(id);
  }
}
