export const get404 = (req, res, next) => {
  res.status(404).send('Not found');
};
