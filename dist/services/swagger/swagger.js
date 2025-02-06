"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
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
        description: 'This is a REST API DOCS for application made with Express and documented with Swagger',
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
    const swaggerPath = path_1.default.join(__dirname, './docs');
    const files = ['auth.yaml'];
    let swaggerDocs = {};
    files.forEach(file => {
        const filePath = path_1.default.join(swaggerPath, file);
        const yamlData = yamljs_1.default.load(filePath);
        swaggerDocs = (0, lodash_1.merge)(swaggerDocs, yamlData);
    });
    return swaggerDocs;
};
const swaggerSpec = Object.assign(Object.assign({}, baseSwaggerConfig), { paths: loadSwaggerFiles() });
const setupSwagger = (app, port) => {
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
};
exports.default = setupSwagger;
