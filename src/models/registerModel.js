import Joi from 'joi';
import { GET_DB } from '~/configs/mongodb';

const USER_COLLECTION = 'users';
const USER_SCHEMA = Joi.object({
  email: Joi.string().required().strict().trim(),
  password: Joi.string().required().strict().trim(),
  tel: Joi.string().required().strict(),
  address: Joi.string().required().strict().trim(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false),
});

const validBeforeCreate = async (data) => {
  return await USER_SCHEMA.validateAsync(data, { abortEarly: false });
};

const createUser = async (data) => {
  try {
    const validData = await validBeforeCreate(data);
    return await GET_DB().collection(USER_COLLECTION).insertOne(validData);
  } catch (error) {
    throw new Error(error);
  }
};

export const registerModel = { USER_COLLECTION, USER_SCHEMA, createUser };
