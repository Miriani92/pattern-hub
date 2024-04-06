import express, { Request, Response } from "express";
import appRouter from "./router/router";
import { justVerify } from "./controllers/controller";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
