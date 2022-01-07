import { ArticleEntity } from "../../domain/article";

export interface ArticleRepository {
  findAll(): Promise<ArticleEntity[]>;
  find(id: number): Promise<ArticleEntity>;
}
