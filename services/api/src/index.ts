import express, { Request, Response } from "express";
import cors from 'cors';

import { connectToDatabase } from "./mongo";

const app = express();
const port = process.env.VLK_SRMS_API_PORT || 5123;

// Allow all origins, you can configure it to allow specific origins in production
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  const { coursesCollection, stundentsCollection } = await connectToDatabase();
  app.get("/", (req: Request, res: Response) =>
    res.send("Hello World from app.ts!")
  );

  app.get(
    "/students",
    async (req: Request, res: Response) => {
      try {
        const games = await stundentsCollection.find({}).toArray();

        res.status(200).send(games);
      } catch (error) {
        res.status(500).send(error);
      }
    }
  );

  app.post("/students", async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const result = await stundentsCollection.insertOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        email: req.body.email,
      });

      result
        ? res
            .status(201)
            .send(
              `Successfully created a new game with id ${result.insertedId}`
            )
        : res.status(500).send("Failed to create a new game.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });

  app.get("/courses", (req: Request, res: Response) =>
    res.json([
      {
        id: "a1",
        courseName: "Web Application Scripting",
      },
      {
        id: "a2",
        courseName: "Database Management",
      },
    ])
  );

  app.get("/results", (req: Request, res: Response) =>
    res.json([
      {
        id: "b1",
        courseName: "Web Application Scripting",
        student: "John Smith",
        score: "A",
      },
      {
        id: "b2",
        courseName: "Database Management",
        student: "John Smith",
        score: "A",
      },
    ])
  );

  const server = app.listen(port, () =>
    console.log(`[server]: Server is running at http://localhost:${port}`)
  );
})();
