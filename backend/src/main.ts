import express from 'express';
import { Request, Response, NextFunction } from 'express';
import flyersRoutes from './routes/flyers';
import { get404 } from './controllers/error';
const app = express();
const PORT = 8000;

app.use('/api', flyersRoutes);
app.use((error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    error: error.message ? error.message : 'Internal Server Error!'
  });
});
app.use(get404);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
