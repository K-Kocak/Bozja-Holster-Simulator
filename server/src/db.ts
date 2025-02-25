import 'dotenv/config.js'
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.e4yzm.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DATABASE_APP_NAME}`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


const connectDB = async () => {
  try {
    await client.connect();
    await client.db('sample_supplies').command({ ping: 1 }); // Replace with your database name
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
  finally {
    await client.close();
  }
};

export { connectDB };