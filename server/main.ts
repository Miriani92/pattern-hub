import express, { Request, Response } from "express";
import appRouter from "./router/router";
import db from "./db/connect";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", appRouter);

const startServer = async () => {
  try {
    await db.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
