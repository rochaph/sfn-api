import {
  ArticleRepository,
  CreatableArticle,
} from "../ports/article-repository";

export default class CreateArticle {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async handle(article: CreatableArticle): Promise<void> {
    await this.repository.create(article);
  }
}
