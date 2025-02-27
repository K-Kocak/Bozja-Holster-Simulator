/*import 'dotenv/config.js'
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.${process.env.DATABASE_MONGODB_NET}/?retryWrites=true&w=majority&appName=${process.env.DATABASE_APP_NAME}`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export interface your_mum {
  id: number,
  key: string,
  data: string
}

let database : Db;

const connectDB = async () => {
  try {
    await client.connect();
    //await client.db('sample_supplies').command({ ping: 1 }); // Replace with your database name
    database = client.db('sample_supplies');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

export { database };*/