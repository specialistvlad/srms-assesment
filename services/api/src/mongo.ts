import * as mongoDB from "mongodb";

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.VLK_SRMS_MONGO_URL ||
      "mongodb://root:example@localhost:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true"
  );

  await client.connect();
  const db: mongoDB.Db = client.db("srms");
  const coursesCollection: mongoDB.Collection = db.collection('courses');
  const studentsCollection: mongoDB.Collection = db.collection('students');
  const resultsCollection: mongoDB.Collection = db.collection('results');
  

  console.log(
    `Successfully connected to database: ${db.databaseName}`
  );

  return {
    coursesCollection,
    studentsCollection,
    resultsCollection,
  }
}
