import express, { Request, Response } from "express";

const app = express();
const port = process.env.VLK_SRMS_API_PORT || 5123;

app.disable("x-powered-by");

app.get("/", (req: Request, res: Response) =>
  res.send("Hello World from app.ts!")
);
const server = app.listen(port, () =>
  console.log(`[server]: Server is running at http://localhost:${port}`)
);
