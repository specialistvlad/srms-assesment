import 'dotenv/config'
import * as mongoDB from "mongodb";

const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.VLK_SRMS_MONGO_URL ||
      "mongodb://root:example@localhost:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true"
  );
export default client.connect();