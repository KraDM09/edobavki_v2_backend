const collection = require('@src/validators/_collection');

module.exports = {
  code: {
    ...collection.req,
    ...collection.string,
  },
};
