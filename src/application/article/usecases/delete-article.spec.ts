import ArticleMongoRepository from "../../../infrastructure/repositories/article-mongo-repository";
import DeleteArticle from "./delete-article";

jest.mock("../../../infrastructure/repositories/article-mongo-repository");
describe("delete-article", () => {
  const repo = new ArticleMongoRepository();
  let useCase: DeleteArticle;

  beforeEach(() => {
    useCase = new DeleteArticle(repo);
  });

  test("should call delete", async () => {
    const spy = jest.spyOn(repo, "delete");
    await useCase.handle(1);
    expect(spy).toBeCalledTimes(1);
  });
});
