import * as mongoDB from "mongodb";
import { ObjectId } from "mongodb";
import clientPromise from "./mongo";

export async function collection(collectionName: string) {
  const client = await clientPromise;
  const db: mongoDB.Db = client.db("srms");
  return db.collection(collectionName);
}

export async function getStudents() {
  const students = await collection("students");
  const result = await students.find({}).toArray();
  return result;
}

export async function postStudents(data) {
  const students = await collection("students");
  return students.insertOne(data);
}

export async function removeStudent(id: string): Promise<string | boolean> {
  const coll = await collection("students");
  const objectId = new ObjectId(id);

  const existing = await coll.findOne({ _id: objectId });
  if (!existing) {
    return false;
  }

  const deleteResult = await coll.deleteOne({ _id: objectId });
  if (deleteResult.deletedCount !== 1) {
    throw new Error('deleteResult.deletedCount !== 1');
  }
  
  return id;
}

export async function getCourses() {
  const courses = await collection("courses");
  const result = await courses.find({}).toArray();
  return result;
}

export async function postCourses(data) {
  const courses = await collection("courses");
  return courses.insertOne(data);
}

export async function getResults() {
  const results = await (await collection("results")).find({}).toArray();
  if (results.length <= 0) {
    return [];
  }

  const students = await (await collection("students")).find({}).toArray();
  const courses = await (await collection("courses")).find({}).toArray();
  return results
    .map(({ _id, studentId, courseId, score }) => {
      const course = courses.find((course) => course._id.equals(courseId));
      const student = students.find((student) => student._id.equals(studentId));

      const courseName = course ? course.courseName : null;
      const studentName = student
        ? `${student.firstName} ${student.lastName}`
        : null;

      return { courseName, studentName, score, _id };
    })
    .filter(({ studentName, courseName }) => studentName && courseName);
}

export async function postResults(data) {
  const results = await collection("results");
  return results.insertOne(data);
}
