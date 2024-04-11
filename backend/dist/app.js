import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// MIDDLEWARES
// Allow the server to recieve json data in the req body
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map