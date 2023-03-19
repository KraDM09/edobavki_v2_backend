const express = require('express');
const db = require('@src/modules/db');
const response = require('@src/modules/response');
const consts = require('@src/modules/consts');

const router = express.Router();

router.post('/seo/get_by_url', async (req, res, next) => {
  const {
    id,
    url,
  } = req.body;

  const [
    seo,
  ] = await db.query('get_seo', {
    post_id: id,
    url,
  });

  next({
    code: response.CODE_OK,
    status: response.STATUS_OK,
    seo: seo ? {
      title: seo.title,
      keywords: seo.keywords,
      description: seo.description,
    } : consts.DEFAULT_SEO,
  });
});

module.exports = router;
