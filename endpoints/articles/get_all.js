const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');

const router = express.Router();

router.post('/articles/get_all', async (req, res, next) => {
  const {
    limit,
  } = req.body;

  const articles = await db.query('get_all_articles', req.body, {
    limit,
  });

  next({
    articles,
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
