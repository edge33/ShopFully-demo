import path from 'path';
import flyerMapper from '../models/flyer/flyerMapper';
import { loadFile } from '../fileLoading/fileLoader';

export const getFlyers = async (req, res, next) => {
  const limit = isNaN(+req.query.limit) || +req.query.limit <= 0 ? 100 : +req.query.limit;
  const page = isNaN(+req.query.page) || +req.query.page <= 1 ? 0 : +req.query.page - 1;
  let data = [];
  try {
    data = await loadFile(path.join(__dirname, '..', 'input', 'flyers_data.csv'));
    const flyerData = data.slice(page * limit, page * limit + limit).map(flyer => flyerMapper(flyer));
    return res.send(flyerData);
  } catch (_) {
    next(new Error(''));
  }
};

export default {
  getFlyers: getFlyers
};
