import { config } from "dotenv";
import express from "express";
import cors from "cors";

config();

const app = express();

app.use(cors({ origin: "*" }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
