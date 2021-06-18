import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import postRoutes from './routes/posts';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/posts', postRoutes);

export default app;