import Article from "./article";
describe("article", () => {
  test("should be defined", () => {
    const article = new Article({
      title: "",
      summary: "",
      featured: false,
      url: "",
      newsSite: "",
      publishedAt: "",
      imageUrl: "",
      launches: [],
      events: [],
    });

    expect(article).toBeDefined();
  });
});
