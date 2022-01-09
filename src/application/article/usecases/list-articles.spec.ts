import ArticleMongoRepository from "../../../infrastructure/repositories/article-mongo-repository";
import ListArticle from "./list-articles";
jest.mock("../../../infrastructure/repositories/article-mongo-repository");
describe("list-article", () => {
  const repo = new ArticleMongoRepository();
  let useCase: ListArticle;

  beforeEach(() => {
    useCase = new ListArticle(repo);
  });

  test("should call findAll", async () => {
    const spy = jest.spyOn(repo, "findAll");
    await useCase.handle(0, 0, false);
    expect(spy).toBeCalledTimes(1);
  });
});
