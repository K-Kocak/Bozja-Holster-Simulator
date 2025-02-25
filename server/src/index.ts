import express from 'express';
import cors from 'cors';
import { connectDB } from './db';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});