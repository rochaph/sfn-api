import Article from "../../../application/article/domain/article";
import {
  ArticleRepository,
  CreatableArticle,
  UpdatableArticle,
} from "../../../application/article/ports/article-repository";
import CreateArticle from "../../../application/article/usecases/create-article";
import DeleteArticle from "../../../application/article/usecases/delete-article";
import GetArticle from "../../../application/article/usecases/get-article";
import ListArticle from "../../../application/article/usecases/list-articles";
import UpdateArticle from "../../../application/article/usecases/update-article";

export default class ArticleService {
  private repository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  public async findAllArticles(
    offset: number,
    limit: number,
    newest: boolean
  ): Promise<Article[]> {
    const useCase = new ListArticle(this.repository);
    return useCase.handle(offset, limit, newest);
  }

  public async findArticleById(id: number): Promise<Article | null> {
    const useCase = new GetArticle(this.repository);
    return useCase.handle(id);
  }

  public async createArticle(article: CreatableArticle): Promise<void> {
    const useCase = new CreateArticle(this.repository);
    return useCase.handle(article);
  }

  public async updateArticle(article: UpdatableArticle): Promise<void> {
    const useCase = new UpdateArticle(this.repository);
    return useCase.handle(article);
  }

  public async deleteArticle(id: number): Promise<void> {
    const useCase = new DeleteArticle(this.repository);
    return useCase.handle(id);
  }
}
