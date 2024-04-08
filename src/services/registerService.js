export const registerService = async (reqBody) => {
  try {
    console.log(`>>> log by service: `, reqBody);
    // console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
