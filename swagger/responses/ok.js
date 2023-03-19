module.exports = {
  200: {
    description: 'Успешный ответ',
    schema: {
      required: [
        'code',
        'status',
      ],
      properties: {
        code: {
          type: 'number',
          example: 200,
        },
        status: {
          type: 'string',
          example: 'OK',
        },
      },
    },
  },
};
