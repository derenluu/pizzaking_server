import { StatusCodes } from 'http-status-codes';
import { registerService } from '~/services/registerService';

export const registerController = async (req, res, next) => {
  try {
    // console.log(req.body);
    const result = await registerService(req.body);
    // res.status(StatusCodes.CREATED).json(result);
    // next();
  } catch (error) {
    // next(error);
  }
};
