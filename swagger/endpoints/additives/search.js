module.exports = {
  post: {
    tags: [
      'Additives',
    ],
    description: 'Поиск по добавкам',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим найти',
        schema: {
          required: [
            'txt',
          ],
          properties: {
            txt: {
              type: 'string',
              example: '121',
            },
          },
        },
      },
    ],
    responses: {
      200: {
        description: 'Успешный ответ',
        schema: {
          required: [
            'code',
            'status',
            'additives',
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
            additives: {
              type: 'array',
              items: {
                type: 'object',
                properties: require('../../definitions/Additive')().properties,
              },
            },
          },
        },
      },
    },
  },
};
