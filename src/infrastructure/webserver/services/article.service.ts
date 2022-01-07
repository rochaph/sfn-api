import GetArticle from "../../../application/usecases/getArticle";
import ListArticle from "../../../application/usecases/listArticles";
import ArticleMongoRepository from "../../repositories/ArticleMongoRepository";

export default class ArticleService {
  async getAll() {
    const repositoy = new ArticleMongoRepository();
    const useCase = new ListArticle(repositoy);
    const articles = await useCase.handle();
    return articles;
  }

  async getArticleById(id: number) {
    const repositoy = new ArticleMongoRepository();
    const useCase = new GetArticle(repositoy);
    const article = await useCase.handle(id);
    return article;
  }
}
