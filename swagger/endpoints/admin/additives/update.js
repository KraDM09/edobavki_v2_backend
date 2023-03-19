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
    description: 'Редактирование добавки',
    parameters: [
      {
        name: 'additive',
        in: 'body',
        description: 'Добавка, которую мы хотим редактировать',
        schema: require('../../../definitions/Additive')(false),
      },
    ],
    responses: {
      ...require('../../../responses/ok'),
      ...require('../../../responses/forbidden'),
    },
  },
};
