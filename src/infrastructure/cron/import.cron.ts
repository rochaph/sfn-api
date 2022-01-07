import cron from "node-cron";
import { ArticleModel } from "../database/models/article.model";
import { countArticles, getArticles } from "../external/articles.api";

export const importArticles = cron.schedule(
  "0 * * * * *",
  async () => {
    console.log("Importing new articles");

    let numberOfArticles = 0;
    let imported = 0;

    numberOfArticles = await countArticles();

    while (imported < numberOfArticles) {
      const articles = await getArticles(imported);

      const bulkOps = articles.map((article: { id: number }) => ({
        updateOne: {
          filter: { id: article.id },
          update: article,
          upsert: true,
        },
      }));

      ArticleModel.bulkWrite(bulkOps);

      imported = articles[articles.length].id;
    }
    console.log("Import complete!");
  },
  { scheduled: true, timezone: "America/Sao_Paulo" }
);
