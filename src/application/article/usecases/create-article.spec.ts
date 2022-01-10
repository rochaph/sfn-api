import ArticleMongoRepository from "../../../infrastructure/repositories/article-mongo-repository";
import Article from "../domain/article";
import CreateArticle from "./create-article";
jest.mock("../../../infrastructure/repositories/article-mongo-repository");
describe("create-article", () => {
  const repo = new ArticleMongoRepository();
  let useCase: CreateArticle;

  beforeEach(() => {
    useCase = new CreateArticle(repo);
  });

  test("should call create", async () => {
    const spy = jest.spyOn(repo, "create");
    const article = new Article({
      title: "",
      summary: "",
      featured: false,
      url: "",
      newsSite: "",
      publishedAt: new Date(),
      imageUrl: "",
      launches: [],
      events: [],
    });

    await useCase.handle(article);
    expect(spy).toBeCalledTimes(1);
  });
});
