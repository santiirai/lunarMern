import express from 'express';
import router from './routes/index.routes.js';
import connectToDatabase from './utils/databaseconnect.js';

const app = express();

app.use(express.json());
connectToDatabase();


app.use(router);

app.listen(3000);