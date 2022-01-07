import db from "../database/mongoose";
import { importArticles } from "../cron/import.cron";

export default async () => {
  await db.init();
  importArticles.start();
};
