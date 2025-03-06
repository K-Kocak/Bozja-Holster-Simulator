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

const keyLength : number = 10;
const characters : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength : number = characters.length;

function CreateKeyForHolster() : string {
    let keyString : string = "";
    for(let i : number = 0; i < keyLength; i++) {
        keyString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return keyString;
}

app.post('/api/findholster', async (req, res) => {
    const holsterJson = req.body.set;
    const idHolsterJson = req.body.idOfSet;
    const database = client.db("holster_key_data");
    const collection = database.collection("holster_key_data_table");
    const findExisting = await collection.findOne({"data": {holsterJson}});
    res.setHeader('Content-Type', 'application/json');
    if(findExisting?._id == null) {
        const keyForHolster : string = CreateKeyForHolster();
        try 
        {
            await collection.insertOne({ key: keyForHolster, data: holsterJson, idOfSet: idHolsterJson});
        }
        catch (e) 
        {
            console.error(e);
        }
        finally 
        {
            res.send({ keyUsed: keyForHolster});
        }
    }
    else {
        res.send({ keyUsed: findExisting.key});
    }
});

/*--------------------------------------------*/

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
