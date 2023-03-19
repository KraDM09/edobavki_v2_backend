module.exports = {
  get: {
    description: 'Проверка работоспособности сервиса',
    responses: {
      200: {
        description: 'Стандартный ответ',
        schema: {
          required: [
            'code',
            'status',
            'message',
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
            message: {
              type: 'string',
              example: 'pong',
            },
          },
        },
      },
    },
  },
};
