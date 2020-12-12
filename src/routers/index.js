import { Router } from 'express';
import docRouter from './docs';
import apiRouter from './api';
import { expressLogger } from '../utils/logger';
import access from '../middlewares/access';

const rootRouter = Router();
rootRouter.use(expressLogger);
rootRouter.use(access);
rootRouter.use('/api', apiRouter);
rootRouter.use('/docs', docRouter);
rootRouter.get('/ready', (req, res) => res.sendStatus(200));

export default rootRouter;
