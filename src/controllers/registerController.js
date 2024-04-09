import { StatusCodes } from 'http-status-codes';
import { registerService } from '~/services/registerService';

export const registerController = async (req, res, next) => {
  try {
    const createUser = await registerService(req.body);
    res.status(StatusCodes.CREATED).json(createUser);
  } catch (error) {
    next(error);
  }
};
