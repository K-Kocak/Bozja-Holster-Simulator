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

interface items {
  name: string,
  tags: string[],
  price: number,
  quantity: number
}

interface customer {
  gender: string,
  age: number,
  email: string,
  satisfaction: number
}

interface sales {
  _id: number,
  saleDate: Date,
  items: items[],
  storeLocation: string,
  customer: customer,
  couponUsed: boolean,
  purchaseMethod: string
}

const testAdd = {"saleDate":{"$date":{"$numberLong":"1512326388253"}},"items":[{"name":"backpack","tags":["school","travel","kids"],"price":{"$numberDecimal":"127.59"},"quantity":{"$numberInt":"3"}},{"name":"notepad","tags":["office","writing","school"],"price":{"$numberDecimal":"17.6"},"quantity":{"$numberInt":"4"}},{"name":"binder","tags":["school","general","organization"],"price":{"$numberDecimal":"18.67"},"quantity":{"$numberInt":"2"}},{"name":"pens","tags":["writing","office","school","stationary"],"price":{"$numberDecimal":"60.56"},"quantity":{"$numberInt":"3"}},{"name":"notepad","tags":["office","writing","school"],"price":{"$numberDecimal":"28.41"},"quantity":{"$numberInt":"1"}},{"name":"envelopes","tags":["stationary","office","general"],"price":{"$numberDecimal":"15.28"},"quantity":{"$numberInt":"7"}},{"name":"laptop","tags":["electronics","school","office"],"price":{"$numberDecimal":"1259.02"},"quantity":{"$numberInt":"3"}}],"storeLocation":"Moon","customer":{"gender":"M","age":{"$numberInt":"40"},"email":"dotzu@ib.sh","satisfaction":{"$numberInt":"4"}},"couponUsed":false,"purchaseMethod":"In store"}

/*----------------API ROUTES-----------------*/

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

/*
app.get('/api/:link', async (req, res) => {
  const userId = req.params.link;
  try {
    const database = client.db('sample_supplies');
    console.log(`Received request for user ID: ${userId}`); // Log the request
    const collections = await database.collection("sales");
    const findone = await collections.find({ "storeLocation": "London" }).toArray();
    console.log(`Received request for collection: ${findone}`);
    // const addMoon = await collections.insertOne(testAdd);
    //const updateMoon = await collections.updateOne({ "storeLocation": "Moon" }, { $set: {couponsUsed: true, purchaseMethod: "Online"} });
    const deleteMoon = await collections.deleteOne({ "storeLocation": "Moon" });
    res.send(deleteMoon);
  }
  finally {
    client.close();
  }
  
});
*/

app.get('/api/findholster/:holsterjson', async (req, res) => {
  const greeting = req.params.holsterjson;
  res.setHeader('Content-Type', 'application/json');
  res.json(greeting);
});

/*--------------------------------------------*/

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
