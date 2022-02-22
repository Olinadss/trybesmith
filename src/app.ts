import express from 'express';
import UserRoutes from './routers/routeUser';

const app = express();

app.use(express.json());

app.use(UserRoutes);

export default app;
