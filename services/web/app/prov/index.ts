import * as mongoDB from "mongodb";
import clientPromise from "./mongo";

export async function collection(collectionName: string) {
  const client = await clientPromise;
  const db: mongoDB.Db = client.db("srms");
  return db.collection(collectionName);
}


export async function getStudents() {
  const students = await collection('students');
  const result = await students.find({}).toArray();
  return result;
}

export async function postStudents(student) {
  const students = await collection('students');
  return students.insertOne(student);
}
