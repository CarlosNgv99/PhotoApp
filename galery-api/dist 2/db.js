"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConn = void 0;
const mongoose_1 = require("mongoose");
async function startConn() {
    await mongoose_1.connect('mongodb://localhost/photo-app-db', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Database is connected.');
}
exports.startConn = startConn;
