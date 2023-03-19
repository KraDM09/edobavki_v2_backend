const fs = require('fs');
const bodyParser = require('body-parser');
const config = require('@src/modules/config');
const notFound = require('@src/middleware/not_found');
const responseFinal = require('@src/middleware/response_final');
const requestLogging = require('@src/middleware/request_logging');
const responseLogging = require('@src/middleware/response_logging');
const requestValidator = require('@src/middleware/request_validator');

const {
  APP,
} = require('@src/modules/consts');

class Router {
  init(app) {
    app.use(bodyParser.json());

    app.use(requestLogging);
    app.use(requestValidator);

    if (config.app.env === APP.dev) {
      Router.initSwagger(app);
    }

    this.attachDirs({
      app,
      path: `${process.cwd()}/endpoints`,
    });

    app.use(notFound);
    app.use(responseLogging);
    app.use(responseFinal);
  }

  static initSwagger(app) {
    const swagger = require('@src/swagger');
    const swaggerUi = require('swagger-ui-express');

    app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swagger));
  }

  attachDirs({ app, path }) {
    fs.readdirSync(path).forEach((endpoint) => {
      const tempPath = `${path}/${endpoint}`;

      if (fs.lstatSync(tempPath).isDirectory()) {
        this.attachDirs({
          app,
          path: tempPath,
        });

        return;
      }

      app.use(require(tempPath));
    });
  }
}

module.exports = new Router();
