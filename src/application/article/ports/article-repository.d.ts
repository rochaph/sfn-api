import Article from "../domain/article";
export type UpdatableArticle = Partial<Article> & { id: number };
export type CreatableArticle = Omit<Article, "id">;

export interface ArticleRepository {
  findAll(
    offset: number,
    limit: number,
    newest: boolean,
    title?: string
  ): Promise<Article[]>;
  findById(id: number): Promise<Article | null>;
  create(article: CreatableArticle): Promise<void>;
  update(article: UpdatableArticle): Promise<void>;
  delete(id: number): Promise<void>;
}
