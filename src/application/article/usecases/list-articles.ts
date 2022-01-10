import Article from "../domain/article";
import { ArticleRepository } from "../ports/article-repository";

export default class ListArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(
    offset: number,
    limit: number,
    newest: boolean,
    title?: string
  ): Promise<Article[]> {
    return this.repository.findAll(offset, limit, newest, title);
  }
}
