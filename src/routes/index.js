import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { registerRoutes } from '~/routes/registerRoutes';

const Router = express.Router();

// Router.get('/status', (req, res) => {
//   res.status(StatusCodes.OK).json({ message: 'API ready' });
// });

Router.use('/register', registerRoutes);
// Router.use((req, res, next) => {
//   return res.send(`404 NOT FOUND`);
// });
export const APIs = Router;
