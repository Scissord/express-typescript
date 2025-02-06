import 'tsconfig-paths';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import compression from 'compression';
import routes from '@/routes/index';
import setupSwagger from '@/services/swagger/swagger';

dotenv.config();

const app = express();

const PORT = 8080;

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'],
    origin: '*'
  })
);

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Anton started on PORT: ${PORT} ✅✅✅`);
  setupSwagger(app, PORT);
});
