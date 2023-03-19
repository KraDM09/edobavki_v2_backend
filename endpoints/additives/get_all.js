const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');

const router = express.Router();

router.post('/additives/get_all', async (req, res, next) => {
  const additives = await db.query('get_all_additives', req.body);

  next({
    additives,
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
