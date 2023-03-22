const collection = require('@src/validators/_collection');

module.exports = {
  url: {
    ...collection.req,
    ...collection.str,
  },
};
