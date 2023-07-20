import express, { Request, Response } from "express";

const app = express();
const port = process.env.VLK_SRMS_API_PORT || 5123;

app.get("/", (req: Request, res: Response) =>
  res.send("Hello World from app.ts!")
);

app.get("/students", (req: Request, res: Response) =>
  res.json([
    {
      id: '1',
      firstName: "John",
      lastName: "Smith",
      birthday: '12/24/1999',
      email: "js@amazon.com",
    },
  ])
);

app.get("/courses", (req: Request, res: Response) =>
  res.json([
    {
      id: 'a1',
      courseName: "Web Application Scripting",
    },
    {
      id: 'a2',
      courseName: "Database Management",
    },
  ])
);

app.get("/results", (req: Request, res: Response) =>
  res.json([
    {
      id: 'b1',
      courseName: 'Web Application Scripting',
      student: "John Smith",
      score: "A",
    },
    {
      id: 'b2',
      courseName: 'Database Management',
      student: "John Smith",
      score: "A",
    },
  ])
);

const server = app.listen(port, () =>
  console.log(`[server]: Server is running at http://localhost:${port}`)
);
