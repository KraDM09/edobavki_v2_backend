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
    description: 'Редактирование статьи',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим редактировать',
        schema: require('../../../definitions/Article')(false),
      },
    ],
    responses: {
      ...require('../../../responses/ok'),
      ...require('../../../responses/forbidden'),
    },
  },
};
