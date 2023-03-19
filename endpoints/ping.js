const express = require('express');
const response = require('@src/modules/response');

const router = express.Router();

router.all('/ping', (req, res, next) => {
  next({
    message: 'pong',
    code: response.CODE_OK,
    status: response.STATUS_OK,
  });
});

module.exports = router;
