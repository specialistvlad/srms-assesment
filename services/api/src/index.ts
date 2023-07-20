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
  const { coursesCollection, studentsCollection, resultsCollection } =
    await connectToDatabase();

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
            .send(`Successfully created a Student with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a Student.");
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

  app.get("/courses", async (req: Request, res: Response) => {
    try {
      const courses = await coursesCollection.find({}).toArray();
      res.status(200).send(courses);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/courses", async (req: Request, res: Response) => {
    try {
      const result = await coursesCollection.insertOne({
        courseName: req.body.courseName,
      });

      result
        ? res
            .status(201)
            .send(`Successfully created a course with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a course.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });

  app.delete("/courses/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      // Convert the courses to an ObjectId
      const objectIdCoursesId = new ObjectId(id);

      // Check if the courses with the given ID exists in the database
      const existingCourse = await coursesCollection.findOne({
        _id: objectIdCoursesId,
      });
      if (!existingCourse) {
        return res.status(404).send("courses not found.");
      }

      // Delete the courses with the given ID
      const deleteResult = await coursesCollection.deleteOne({
        _id: objectIdCoursesId,
      });

      if (deleteResult.deletedCount === 1) {
        res.status(200).send(`courses with ID ${id} successfully deleted.`);
        console.log(`courses with ID ${id} successfully deleted.`);
      } else {
        res.status(500).send("Failed to delete the student.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while deleting the student.");
    }
  });

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

  app.post("/results", async (req: Request, res: Response) => {
    try {
      const result = await resultsCollection.insertOne({
        courseId: req.body.courseId,
        studentId: req.body.courseId,
        score: req.body.score,
      });

      result
        ? res
            .status(201)
            .send(`Successfully created a result with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a result.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });

  const server = app.listen(port, () =>
    console.log(`[server]: Server is running at http://localhost:${port}`)
  );
})();
