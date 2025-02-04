import { Express, Request, Response } from 'express-serve-static-core';
import { merge } from 'lodash';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const baseSwaggerConfig = {
  components: {
    securitySchemes: {
      bearerAuth: {
        bearerFormat: 'JWT',
        scheme: 'bearer',
        type: 'http'
      }
    }
  },
  info: {
    description:
      'This is a REST API DOCS for application made with Express and documented with Swagger',
    title: 'REST API DOCS',
    version: '1.0.0'
  },
  openapi: '3.0.0',
  security: [
    {
      bearerAuth: []
    }
  ],
  servers: [
    {
      description: 'Development server',
      url: 'http://localhost:8080'
    }
  ]
};

const loadSwaggerFiles = () => {
  const swaggerPath = path.join(__dirname, './docs');
  const files = ['auth.yaml'];
  let swaggerDocs = {};

  files.forEach(file => {
    const filePath = path.join(swaggerPath, file);
    const yamlData = YAML.load(filePath);
    swaggerDocs = merge(swaggerDocs, yamlData);
  });

  return swaggerDocs;
};

const swaggerSpec = {
  ...baseSwaggerConfig,
  paths: loadSwaggerFiles()
};

const setupSwagger = (app: Express, port: number) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export default setupSwagger;
