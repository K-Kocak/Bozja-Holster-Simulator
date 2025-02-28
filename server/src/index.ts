import express from 'express';
import cors from 'cors';

/*----------------DATABASE MONGODB SETUP-----------------*/

import 'dotenv/config.js'
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.${process.env.DATABASE_MONGODB_NET}/?retryWrites=true&w=majority&appName=${process.env.DATABASE_APP_NAME}`;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
);

/*-------------------------------------------------------*/

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*----------------API ROUTES-----------------*/

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

app.get('/api/:link', async (req, res) => {
  const userId = req.params.link;
  const database = client.db('sample_supplies');
  console.log(`Received request for user ID: ${userId}`); // Log the request
  const collections = await database.collection('sales').find({'storeLocation': 'Denver'}).toArray();
  console.log(`Received request for collection: ${collections}`);
  res.send(collections);
});

/*--------------------------------------------*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
