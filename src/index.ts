import db from "./infrastructure/database/mongoose";
import { setup } from "./infrastructure/webserver/config/app";

setup(db).then((app) => {
  const PORT = process.env.INTERNAL_PORT || 3000;
  const listener = app.listen(PORT, () => console.log(`Running on ${PORT}`));
  listener.setTimeout(500000);
});
