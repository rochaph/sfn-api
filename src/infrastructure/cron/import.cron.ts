import cron from "node-cron";
import { importArticles } from "../scripts/import.articles";

export default cron.schedule("* 9 * * *", async () => await importArticles(), {
  scheduled: true,
  timezone: "America/Sao_Paulo",
});
