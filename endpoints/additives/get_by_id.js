const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');

const router = express.Router();

router.post('/additives/get_by_id', async (req, res, next) => {
  const {
    id,
  } = req.body;

  const [
    additive,
  ] = await db.query('get_additive', {
    id,
  });

  next({
    additive,
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
