import { config } from "dotenv";
import express from "express";
import cors from "cors";
import router from "./infra/routes/router";

config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
