const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');

const router = express.Router();

router.post('/additives/search', async (req, res, next) => {
  const {
    txt,
  } = req.body;

  const additives = await db.query('search_additive', {
    txt: `%${txt}%`,
  });

  next({
    additives,
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
