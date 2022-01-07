import axios from "axios";
import { ArticleEntity } from "../../domain/article";

export const countArticles = async (): Promise<number> => {
  let counter = 0;

  await axios
    .get("https://api.spaceflightnewsapi.net/v3/articles/count")
    .then(({ data }) => {
      counter = data;
    })
    .catch((e) => {
      const error = e.response ? e.response.data : e;
      console.log("Error:", error);
    });

  return counter;
};

export const getArticles = async (offset: number): Promise<ArticleEntity[]> => {
  let articles: ArticleEntity[] = [];

  await axios
    .get(
      `https://api.spaceflightnewsapi.net/v3/articles?_start=${offset}&_limit=1000&_sort=id`
    )
    .then(({ data }: { data: ArticleEntity[] }) => {
      articles = data;
    })
    .catch((e) => {
      const error = e.response ? e.response.data : e;
      console.log("Error:", error);
    });

  return articles;
};
