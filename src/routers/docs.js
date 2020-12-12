import { Router } from 'express';
import { join, normalize } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const docRouter = Router();

docRouter.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(
    YAML.load(normalize(join(__dirname, '../swagger/swagger.yml')))
  )
);

export default docRouter;
