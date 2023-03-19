const collection = require('@src/validators/_collection');

module.exports = {
  code: {
    ...collection.req,
    ...collection.str,
    ...collection.length(4, 6),
    format: {
      pattern: '^[eE]d{3}+[a-z]?',
      flags: 'i',
      message: 'должен содержать код добавки',
    },
  },
  spec: {
    ...collection.req,
    ...collection.str,
  },
  functions: {
    ...collection.req,
    ...collection.str,
  },
  in_russia: {
    ...collection.req,
    ...collection.bool,
  },
  appearance: {
    ...collection.str,
  },
  in_eu: {
    ...collection.req,
    ...collection.bool,
  },
  negative_effects: {
    ...collection.str,
    length: {
      maximum: 1500,
      tooLong: 'не должен содержать более %{count} символов',
    },
  },
  order_number: {
    ...collection.req,
    ...collection.int,
  },
  employment: {
    ...collection.req,
    ...collection.str,
  },
  extracted_from: {
    ...collection.req,
    ...collection.str,
  },
};
