import ArticleMongoRepository from "../../../infrastructure/repositories/article-mongo-repository";
import UpdateArticle from "./update-article";

jest.mock("../../../infrastructure/repositories/article-mongo-repository");
describe("update-article", () => {
  const repo = new ArticleMongoRepository();
  let useCase: UpdateArticle;

  beforeEach(() => {
    useCase = new UpdateArticle(repo);
  });

  test("should call update", async () => {
    const spy = jest.spyOn(repo, "update");
    await useCase.handle({ id: 1, title: "" });
    expect(spy).toBeCalledTimes(1);
  });
});
