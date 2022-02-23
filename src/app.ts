import express from 'express';
import UserRoutes from './routers/routeUser';
import LoginRoutes from './routers/routeLogin';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.use(LoginRoutes);

export default app;
