import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/dbConnection.js';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js'
import { errorHandler } from './middleware/errorHandler.js';

connectDB()

const app = express();

app.use(cors({
  origin: process.env.LIVE_URL,
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api", userRoutes)

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.use(errorHandler);
export default app; 
