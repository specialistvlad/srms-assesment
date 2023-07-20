import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import cors from "cors";

import { connectToDatabase } from "./mongo";

const app = express();
const port = process.env.VLK_SRMS_API_PORT || 5123;

// Allow all origins, you can configure it to allow specific origins in production
app.use(cors());

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  const { coursesCollection, studentsCollection } = await connectToDatabase();
  app.get("/", (req: Request, res: Response) =>
    res.send("Hello World from app.ts!")
  );

  app.get("/students", async (req: Request, res: Response) => {
    try {
      const games = await studentsCollection.find({}).toArray();

      res.status(200).send(games);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/students", async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const result = await studentsCollection.insertOne({
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

  app.delete("/students/:id", async (req: Request, res: Response) => {
    const studentId = req.params.id;

    try {
      // Convert the studentId to an ObjectId
      const objectIdStudentId = new ObjectId(studentId);

      // Check if the student with the given ID exists in the database
      const existingStudent = await studentsCollection.findOne({
        _id: objectIdStudentId,
      });
      if (!existingStudent) {
        return res.status(404).send("Student not found.");
      }

      // Delete the student with the given ID
      const deleteResult = await studentsCollection.deleteOne({
        _id: objectIdStudentId,
      });

      if (deleteResult.deletedCount === 1) {
        res
          .status(200)
          .send(`Student with ID ${studentId} successfully deleted.`);
        console.log(`Student with ID ${studentId} successfully deleted.`);
      } else {
        res.status(500).send("Failed to delete the student.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while deleting the student.");
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
