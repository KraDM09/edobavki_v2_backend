module.exports = {
  post: {
    security: [
      {
        JWT: [
        ],
      },
    ],
    tags: [
      'Articles',
    ],
    description: 'Создание новой статьи',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим создать',
        schema: require('../../../definitions/Article')(false),
      },
    ],
    responses: {
      ...require('../../../responses/ok'),
      ...require('../../../responses/forbidden'),
    },
  },
};
