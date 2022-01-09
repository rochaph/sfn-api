import ArticleMongoRepository from "../../../infrastructure/repositories/article-mongo-repository";
import GetArticle from "./get-article";

jest.mock("../../../infrastructure/repositories/article-mongo-repository");
describe("get-article", () => {
  const repo = new ArticleMongoRepository();
  let useCase: GetArticle;

  beforeEach(() => {
    useCase = new GetArticle(repo);
  });

  test("should call findById", async () => {
    const spy = jest.spyOn(repo, "findById");
    await useCase.handle(1);
    expect(spy).toBeCalledTimes(1);
  });
});
