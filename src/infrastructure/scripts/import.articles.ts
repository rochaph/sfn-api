import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import axios from "axios";
import { argv } from "process";
import { ArticleParams } from "../../application/article/domain/article";
import EmailService from "../webserver/services/email.service";

dotenv.config();

if (argv["2"] == "start") {
  importArticles();
}

const spaceFlightApi = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/articles",
  timeout: 10000,
});

const email = new EmailService();

export async function importArticles() {
  const client = new MongoClient(`${process.env.MONGO_URL}`);

  try {
    await client.connect();
    console.log("Connected to MongoDB database!");
  } catch (error) {
    console.error((error as Error).message);
  }

  console.log("Importing new articles");

  try {
    const numberOfArticles = await spaceFlightApi
      .get("/count")
      .then(({ data }) => data);

    let imported = 0;

    while (imported < numberOfArticles) {
      let articles = [];

      articles = await spaceFlightApi
        .get(`?_start=${imported}&_limit=1000&_sort=id`)
        .then(({ data }) => data);

      const bulkOps = articles.map(
        (article: ArticleParams & { id: number }) => ({
          updateOne: {
            filter: { id: article.id },
            update: { $set: article },
            upsert: true,
          },
        })
      );

      await client.db().collection("articles").bulkWrite(bulkOps);

      imported += articles.length;
    }
  } catch (e) {
    await client.close();

    const errorMessage = (e as Error).message;

    console.error(errorMessage);

    await email.sendEmail(
      `${process.env.ALERT_EMAIL}`,
      "Error during article importing",
      errorMessage
    );

    return;
  }

  await client.close();
  console.log("Import complete!");
}
