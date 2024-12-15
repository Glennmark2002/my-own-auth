import express from 'express'; 
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js'

const app = express(); 
dotenv.config();

try {
  mongoose.connect(process.env.MONGO);
  console.log('Connected to MongoDB');
} catch (error) {
  console.log('Connection failed');
}

app.use(express.json());
app.listen(3000, () => console.log('Running')) 
app.use('/api/auth', authRoutes);


// FOR DEBUGGING PROCESS
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});     