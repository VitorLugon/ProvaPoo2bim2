"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/users', UserController_1.default.listUsers);
UserRouter.post('/user', UserController_1.default.createUser);
UserRouter.put('/user', UserController_1.default.updateUser);
UserRouter.delete('/user', UserController_1.default.deleteUser);
exports.default = UserRouter;
