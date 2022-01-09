import {
  ArticleRepository,
  UpdatableArticle,
} from "../ports/article-repository";

export default class UpdateArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(data: UpdatableArticle): Promise<void> {
    return this.repository.update(data);
  }
}
