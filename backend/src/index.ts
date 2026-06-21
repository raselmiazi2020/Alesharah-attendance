import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import routes from './routes';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (_req, res) => {
  res.json({ message: 'Alesharah Smart Attendance & Payroll System API' });
});

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
