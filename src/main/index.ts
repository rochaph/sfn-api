import App from "./config/app";

const app = App.setup();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
