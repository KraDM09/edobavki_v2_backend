module.exports = {
  403: {
    description: 'Forbidden',
    schema: {
      required: [
        'code',
        'status',
      ],
      properties: {
        code: {
          type: 'number',
          example: 403,
        },
        status: {
          type: 'string',
          example: 'FORBIDDEN',
        },
      },
    },
  },
};
