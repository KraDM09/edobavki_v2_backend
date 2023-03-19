module.exports = {
  post: {
    tags: [
      'Articles',
    ],
    description: 'Получение списка статей',
    responses: {
      200: {
        description: 'Успешный ответ',
        schema: {
          required: [
            'code',
            'status',
            'articles',
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
            articles: {
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
