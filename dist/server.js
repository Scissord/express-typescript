"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const index_1 = __importDefault(require("@/routes/index"));
const swagger_1 = __importDefault(require("@/services/swagger/swagger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_fileupload_1.default)());
app.use((0, cors_1.default)({
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE'],
    origin: '*'
}));
app.use('/api', index_1.default);
app.listen(PORT, () => {
    console.log(`Anton started on PORT: ${PORT} ✅✅✅`);
    (0, swagger_1.default)(app, PORT);
});
