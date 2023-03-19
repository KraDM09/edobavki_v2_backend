module.exports = async (req, res, next) => {
  next({
    code: 404,
    status: 'NOT_FOUND',
    error: `Эндпоинт не найдет ${req.method} ${req.originalUrl}`,
  });
};
