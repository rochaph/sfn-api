import Article from "../domain/article";
import { ArticleRepository } from "../ports/article-repository";

export default class GetArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(id: number): Promise<Article | null> {
    return this.repository.findById(id);
  }
}
