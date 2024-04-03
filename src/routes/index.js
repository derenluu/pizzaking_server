import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { registerRoutes } from '~/routes/registerRoutes';

const Router = express.Router();

// Router.get('/status', (req, res) => {
//   res.status(StatusCodes.OK).json({ message: 'API ready' });
// });

Router.use('/register', registerRoutes);

export const APIs = Router;
