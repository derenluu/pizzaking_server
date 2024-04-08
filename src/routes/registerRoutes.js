import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { registerController } from '~/controllers/registerController';
// import { registerService } from '~/services/registerService';

const Router = express.Router();

Router.route('/')
  .get((req, res, next) => {
    res.status(StatusCodes.OK).json({ message: `Note: API get ${StatusCodes.OK}` });
  })
  .post(registerController);
// Router.route('/').post(registerController);

export const registerRoutes = Router;
