import express from 'express';
import UserRoutes from './routers/routeUser';
import LoginRoutes from './routers/routeLogin';
import ProductRoutes from './routers/routeProduct';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.use(LoginRoutes);

app.use(ProductRoutes);

export default app;
