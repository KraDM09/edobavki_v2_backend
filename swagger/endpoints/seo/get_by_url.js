module.exports = {
  post: {
    tags: [
      'Seo',
    ],
    description: 'Поиск по SEO',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим найти',
        schema: {
          required: [
            'action',
            'controller',
          ],
          properties: {
            id: {
              type: 'number',
              example: 4,
            },
            action: {
              type: 'string',
              example: 'index',
            },
            controller: {
              type: 'string',
              example: 'index',
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
            'seo',
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
            seo: {
              type: 'array',
              items: {
                type: 'object',
                properties: require('../../definitions/Seo').properties,
              },
            },
          },
        },
      },
    },
  },
};
