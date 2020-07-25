"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
// Settings
// Asigns a variable port and its value
app.set('port', process.env.PORT || 3000); // When deploying de API to a host it could take either the new port or keep de 3000
// Middlewares
app.use(morgan_1.default('dev')); // shows petitions on console
app.use(cors_1.default());
app.use(express_1.default.json()); // Allows reading json files
// routes
app.use('/api', index_1.default);
// This app will store images
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
