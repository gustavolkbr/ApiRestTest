import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { pageNotFoundHandler } from "./middlewares/page-not-found.middleware";

initializeApp();
const app = express();

routes(app);
errorHandler(app);
pageNotFoundHandler(app);

app.listen(3000, () => {
    console.log("servidor ativo na porta 3000")
});