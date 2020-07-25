"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/frontend'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));
});

console.log(
    '/dist/frontend/index.html');

async function main() {
    db_1.startConn();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Server on port', app_1.default.get('port'));
}
main();
