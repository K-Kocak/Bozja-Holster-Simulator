
/*
import { MongoClient } from 'mongodb';
import mongoconfig from '@backend/mongodb/config.json';

const mongoPass = encodeURIComponent(mongoconfig.connectionString.databasepassword);
const mongoUsername = encodeURIComponent(mongoconfig.connectionString.databaseusername);
const mongocluster = encodeURIComponent(mongoconfig.connectionString.databaseclustername);

const uri = `$mongodb+srv://${mongoUsername}:<${mongoPass}>@${mongocluster}.e4yzm.mongodb.net/?retryWrites=true&w=majority&appName=TestClusterHolsterLinks`;

const client = new MongoClient(import.meta.env.uri);

export async function run() {
  try {
   
    await client.connect();
 
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    await client.close();
  }
}
run().catch(console.dir);
export default run;
*/