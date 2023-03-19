const collection = require('@src/validators/_collection');

module.exports = {
  id: {
    ...collection.req,
    ...collection.int,
  },
};
