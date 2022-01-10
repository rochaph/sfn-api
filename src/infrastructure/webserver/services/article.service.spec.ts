import ListArticle from "../../../application/article/usecases/list-articles";
import GetArticle from "../../../application/article/usecases/get-article";
import CreateArticle from "../../../application/article/usecases/create-article";
import UpdateArticle from "../../../application/article/usecases/update-article";
import DeleteArticle from "../../../application/article/usecases/delete-article";
import ArticleMongoRepository from "../../repositories/article-mongo-repository";
import ArticleService from "./article.service";
import Article from "../../../application/article/domain/article";

jest.mock("../../../application/article/usecases/list-articles");
jest.mock("../../../application/article/usecases/get-article");
jest.mock("../../../application/article/usecases/create-article");
jest.mock("../../../application/article/usecases/update-article");
jest.mock("../../../application/article/usecases/delete-article");

describe("article.service", () => {
  const repository = new ArticleMongoRepository();
  let service: ArticleService;

  beforeEach(() => {
    service = new ArticleService(repository);
  });
  test("should call ListArticle handler", () => {
    const spy = jest.spyOn(ListArticle.prototype, "handle");
    service.findAllArticles(0, 0, false, "");
    expect(spy).toBeCalled();
  });

  test("should call GetArticle handler", () => {
    const spy = jest.spyOn(GetArticle.prototype, "handle");
    service.findArticleById(1);
    expect(spy).toBeCalled();
  });

  test("should call CreateArticle handler", () => {
    const spy = jest.spyOn(CreateArticle.prototype, "handle");
    service.createArticle(
      new Article({
        title: "",
        summary: "",
        featured: false,
        url: "",
        newsSite: "",
        publishedAt: new Date(),
        imageUrl: "",
        launches: [],
        events: [],
      })
    );
    expect(spy).toBeCalled();
  });

  test("should call UpdateArticle handler", () => {
    const spy = jest.spyOn(UpdateArticle.prototype, "handle");
    service.updateArticle({ id: 1, title: "" });
    expect(spy).toBeCalled();
  });

  test("should call DeleteArticle handler", () => {
    const spy = jest.spyOn(DeleteArticle.prototype, "handle");
    service.deleteArticle(1);
    expect(spy).toBeCalled();
  });
});
