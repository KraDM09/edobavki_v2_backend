const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');
const accessControl = require('@src/middleware/access_control');

const router = express.Router();

router.post('/admin/additives/update', accessControl, async (req, res, next) => {
  const {
    code,
    in_russia,
    in_eu,
  } = req.body;

  const [
    additive,
  ] = await db.query('get_additive_by_code', {
    code,
  });

  if (!additive) {
    next({
      code: response.CODE_BR,
      status: response.STATUS_BR,
      message: `Добавка с code = ${code} не существует`,
    });
  }

  await db.query('update_additive', {
    ...req.body,
    in_eu: +in_eu,
    in_russia: +in_russia,
  });

  next({
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
