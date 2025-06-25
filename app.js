import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AppError } from './utils/appError.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// app.all("/*", (req, res, next) => {
//   next(new AppError(404, `Can't find ${req.originalUrl} on this server!`))
// });

app.use(errorMiddleware)


export default app;

