import { StatusCodes } from 'http-status-codes';
import { registerModel } from '~/models/registerModel';
import { hashData, decryptData } from '~/utils/bcrypt';

export const registerService = async (reqBody) => {
  try {
    const password = reqBody.password;
    const validPassword = await hashData(password);
    reqBody.password = validPassword;

    const createdUser = await registerModel.createUser(reqBody);
    return createdUser;
  } catch (error) {
    throw error;
  }
};
