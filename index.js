import express from 'express';
import studentRouter from './routes/index.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './utils/databaseconnect.js';
// import authMiddleware from './middleware/authMiddleware.js';      

const app = express();

app.use(express.json());


connectToDatabase();

app.use(studentRouter);
app.use(authRouter);


app.listen(3000);