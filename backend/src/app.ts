import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

config();
const app = express();
// MIDDLEWARES
// Allow the server to recieve json data in the req body
app.use(express.json());
// allows express server to work with cookies in the headers
app.use(cookieParser(process.env.COOKIE_SECRET));
// Extra log data -> will be removed in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
