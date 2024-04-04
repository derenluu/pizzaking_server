import { StatusCodes } from 'http-status-codes';

const createNew = async (req, res, next) => {
  try {
    // res.send(json(req.body));
    console.log(req.body);
  } catch (error) {}
};

export const registerController = {
  createNew,
};
