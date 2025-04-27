import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is working');
  });
  
  app.use((req, res) => {
    res.status(404).send('Page Not Found');
  });

export default app; 
