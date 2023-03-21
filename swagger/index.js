const config = require('@src/modules/config');

module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Edobavki v2 backend API',
    description: 'Edobavki v2 Project Application API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'x-access-token',
      in: 'header',
    },
  },
  host: `${config.api.path}:${config.api.port}`,
  basePath: '/',
  tags: [
    {
      name: 'Additives',
      description: 'Эндпоинты для работы с пищевыми добавками',
    },
    {
      name: 'Articles',
      description: 'Эндпоинты для работы со статьями',
    },
    {
      name: 'Seo',
      description: 'Эндпоинты для работы со Seo',
    },
  ],
  schemes: [
    'http',
  ],
  consumes: [
    'application/json',
  ],
  produces: [
    'application/json',
  ],
  paths: {
    '/admin/additives/create': require('./endpoints/admin/additives/create'),
    '/admin/additives/update': require('./endpoints/admin/additives/update'),
    '/admin/additives/delete': require('./endpoints/admin/additives/delete'),
    '/additives/get_all': require('./endpoints/additives/get_all'),
    '/additives/get_by_id': require('./endpoints/additives/get_by_id'),
    '/additives/search': require('./endpoints/additives/search'),

    '/admin/articles/create': require('./endpoints/admin/articles/create'),
    '/admin/articles/update': require('./endpoints/admin/articles/update'),
    '/admin/articles/delete': require('./endpoints/admin/articles/delete'),
    '/articles/get_all': require('./endpoints/articles/get_all'),
    '/articles/get_by_id': require('./endpoints/articles/get_by_id'),

    '/seo/get_by_url': require('./endpoints/seo/get_by_url'),

    '/ping': require('./endpoints/ping'),
  },
  definitions: {
    Additive: require('./definitions/Additive')(true),
    Article: require('./definitions/Article')(true),
    Seo: require('./definitions/Seo'),
  },
};
