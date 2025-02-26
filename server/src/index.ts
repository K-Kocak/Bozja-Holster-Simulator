import express from 'express';
import cors from 'cors';
import { database } from './db';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

app.get('/api/:link', async (req, res) => {
  const userId = req.params.link;
  console.log(`Received request for user ID: ${userId}`); // Log the request
  const collection = database.collection('sales');
  const idk = await collection.find({ storeLocation: "Denver" }).toArray();
  console.log(idk);
  res.json({ message: `User ID is ${userId}` });
  console.log(database);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});