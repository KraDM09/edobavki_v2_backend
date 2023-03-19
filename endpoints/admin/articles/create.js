const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');
const accessControl = require('@src/middleware/access_control');

const router = express.Router();

router.post('/admin/articles/create', accessControl, async (req, res, next) => {
  await db.query('create_article', req.body);

  next({
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
