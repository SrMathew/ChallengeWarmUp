import express, { json } from 'express';
import morgan from 'morgan';

//importing routes


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes


export default app;