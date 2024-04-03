import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import exitHook from 'async-exit-hook';
import { env } from '~/configs/environment';
import { APIs } from '~/routes';
import { corsOptions } from '~/configs/cors';
import { createJWT } from './middlewares/jwtAction';
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/configs/mongodb';

const START_SERVER = () => {
  const app = express();

  // CORS config
  app.use(cors(corsOptions));

  // Enable req.body json data
  app.use(express.json());

  // Middlewares
  // app.use(errorHandlingMiddleware);

  app.use('/', APIs);

  if (process.env.BUILD_MODE === 'production') {
    app.listen(env.APP_PORT, () => {
      console.log(`>>> Backend Server running successfully at PORT: ${env.APP_PORT}`);
    });
  } else {
    app.listen(env.APP_PORT, () => {
      console.log(
        `>>> Backend Server running successfully at: http://${env.APP_HOST}:${env.APP_PORT}`
      );
    });
  }

  exitHook(() => {
    console.log('>>> Backend Server is shuting down');
    CLOSE_DB();
    console.log('-> Disconnected from MongoDB');
  });
};

CONNECT_DB()
  .then(() => console.log('-> Connected to database MongoDB'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
