import { Router } from 'express';
import { saveCustomer, getCountries } from '../service';
import handler from '../middlewares/handler';

const apiRouter = Router();

apiRouter.post('/save', handler(saveCustomer));
apiRouter.get('/countries', handler(getCountries));

export default apiRouter;
