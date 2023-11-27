"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    constructor() { }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (data.email !== "" && data.name !== "") {
                const newuser = yield UserService_1.default.createUser(data);
                res.status(200).json({
                    status: 'ok',
                    newuser: newuser
                });
            }
            else {
                res.status(400).json({
                    status: 'error',
                    message: 'Favor inserir os dados no corpo da requisição'
                });
            }
        });
    }
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = UserService_1.default.listUsers();
            res.status(200).json({
                status: 'ok',
                users: users
            });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Update user');
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Delete user');
        });
    }
}
exports.default = new UserController;
