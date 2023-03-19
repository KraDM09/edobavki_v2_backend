const collection = require('@src/validators/_collection');

module.exports = {
  spec: {
    ...collection.req,
    ...collection.str,
  },
  announcement: {
    ...collection.req,
    ...collection.str,
  },
  content: {
    ...collection.req,
    ...collection.str,
  },
  thumb_name: {
    ...collection.req,
    ...collection.str,
    ...collection.length(1, 32),
    format: {
      pattern: '^[\\w,\\s-]+\\.[A-Za-z]{3}$',
      flags: 'i',
      message: 'должен содержать имя превью',
    },
  },
};
