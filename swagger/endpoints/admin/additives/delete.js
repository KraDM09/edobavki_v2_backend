module.exports = {
  post: {
    security: [
      {
        JWT: [
        ],
      },
    ],
    tags: [
      'Additives',
    ],
    description: 'Удаление добавки',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим удалить',
        schema: {
          required: [
            'code',
          ],
          properties: {
            code: {
              type: 'string',
              example: 'E121',
            },
          },
        },
      },
    ],
    responses: {
      ...require('../../../responses/ok'),
      ...require('../../../responses/forbidden'),
    },
  },
};
