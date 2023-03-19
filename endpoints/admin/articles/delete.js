const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');
const accessControl = require('@src/middleware/access_control');

const router = express.Router();

router.all('/admin/articles/delete', accessControl, async (req, res, next) => {
  const {
    id,
  } = req.body;

  const [
    article,
  ] = await db.query('get_article_by_id', {
    id,
  });

  if (!article) {
    next({
      code: response.CODE_BR,
      status: response.STATUS_BR,
      message: `Статья с id = ${id} не существует`,
    });
  }

  await db.query('delete_article', req.body);

  next({
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
