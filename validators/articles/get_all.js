const collection = require('@src/validators/_collection');

module.exports = {
  limit: {
    ...collection.int,
  },
};
