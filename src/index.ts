import bootstrap from "./infrastructure/config/bootstrap";
import App from "./infrastructure/webserver/config/app";

bootstrap();

const app = App.setup();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on ${PORT}`));
