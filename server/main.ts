import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 4000;

console.log("nice");
app.get("/", (req: Request, res: Response) => {
  res.send("hello from the server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
