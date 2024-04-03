import express from 'express';
import { StatusCodes } from 'http-status-codes';

const Router = express.Router();

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'API ready GET' });
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: 'API ready POST' });
  });

export const registerRoutes = Router;