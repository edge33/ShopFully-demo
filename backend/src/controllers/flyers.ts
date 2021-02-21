import path from 'path';
import { Request, Response, NextFunction } from 'express';
import flyerMapper from '../models/flyer/flyerMapper';
import { loadFile } from '../fileLoading/fileLoader';
import Flyer from '../models/flyer/FlyerInterface';

export const getFlyers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const limit = isNaN(+req.query.limit) || +req.query.limit <= 0 ? 100 : +req.query.limit;
  const page = isNaN(+req.query.page) || +req.query.page <= 1 ? 0 : +req.query.page - 1;

  try {
    const data: Record<string, string>[] = await loadFile(path.join(__dirname, '..', 'input', 'flyers_data.csv'));
    const flyerData = data
      .slice(page * limit, page * limit + limit)
      .map(flyer => flyerMapper(flyer))
      .filter(filterFlyers);
    res.send(flyerData);
    return;
  } catch (_) {
    res.status(500).send({
      error: 'Internal Server Error!'
    });
  }
};

const filterFlyers = (flyer: Flyer) => {
  return flyer.isPublished;
};

export default {
  getFlyers: getFlyers
};
