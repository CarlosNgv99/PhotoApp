"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
// Settings
app.set('port', process.env.PORT || 3000); // When deploying de API to a host it could take either the new port or keep de 3000
// Middlewares
app.use(morgan_1.default('dev')); // shows petitions on console
app.use(express_1.default.json()); // Allows reading json files
// routes
app.use('/api', index_1.default);
// This app will store images
const path2 = express_1.default.static(__dirname + '/uploads');
console.log(path2.toString());
app.use('/uploads', express_1.default.static(__dirname + '/uploads'));
exports.default = app;
