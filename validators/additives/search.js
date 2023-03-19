const collection = require('@src/validators/_collection');

module.exports = {
  txt: {
    ...collection.req,
    ...collection.str,
    ...collection.length(3, 10),
  },
};
