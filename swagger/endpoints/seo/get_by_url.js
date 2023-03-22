module.exports = {
  post: {
    tags: [
      'Seo',
    ],
    description: 'Поиск по SEO',
    parameters: [
      {
        name: 'seo',
        in: 'body',
        description: 'Seo, которое мы хотим найти для url',
        schema: {
          required: [
            'url',
          ],
          properties: {
            url: {
              type: 'string',
              example: 'index/index',
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
