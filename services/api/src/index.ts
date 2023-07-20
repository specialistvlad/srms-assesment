import express, { Request, Response } from "express";
import { connectToDatabase } from "./mongo";

const app = express();
const port = process.env.VLK_SRMS_API_PORT || 5123;

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
    // res.json([
    //   {
    //     id: "1",
    //     fullName: "John Smith",
    //     birthday: "12/24/1999",
    //     email: "js@amazon.com",
    //   },
    // ])
  );

  app.post("/students", async (req: Request, res: Response) => {
    try {
      const result = await stundentsCollection.insertOne({
        fullName: req.body.fullName,
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
