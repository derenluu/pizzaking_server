import { StatusCodes } from 'http-status-codes';
import { registerService } from '~/services/registerService';

export const registerController = async (req, res, next) => {
  try {
    const result = await registerService(req.body);
    res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    next(error);
  }
};
