import { ArticleRepository } from "../ports/article-repository";

export default class DeleteArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
