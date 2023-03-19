module.exports = {
  post: {
    tags: [
      'Additives',
    ],
    description: 'Получение статьи',
    parameters: [
      {
        name: 'article',
        in: 'body',
        description: 'Статья, которую мы хотим получить',
        schema: {
          required: [
            'id',
          ],
          properties: {
            id: {
              type: 'number',
              example: 4,
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
            'article',
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
            article: {
              type: 'array',
              items: {
                type: 'object',
                properties: require('../../definitions/Article')().properties,
              },
            },
          },
        },
      },
    },
  },
};
