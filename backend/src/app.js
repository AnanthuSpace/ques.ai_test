import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/dbConnection.js';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

connectDB()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.use(errorHandler);
export default app; 
