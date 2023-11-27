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
const AuctionService_1 = __importDefault(require("../services/AuctionService"));
class AuctionController {
    constructor() { }
    listAuction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auction = yield AuctionService_1.default.findAuction();
            return res.status(200).json({
                status: "OK",
                auction: auction,
            });
        });
    }
    createAuction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (data) {
                const newAuction = AuctionService_1.default.createAuction(data);
                res.status(200).json({
                    status: '20',
                    newAuction: newAuction
                });
            }
            else {
                res.status(400).json({
                    status: "error",
                    mensage: "Missing data"
                });
            }
            res.end('Auction created');
        });
    }
    updateAuction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auctionToUpdate = req.params.id;
                const { product, price, limitData, ownerId } = req.body;
                const auctionUpdated = yield AuctionService_1.default.updateAuction(auctionToUpdate, req.body);
                return res.json(auctionUpdated);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteAuction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auctionToDelete = req.params.id;
                const auctionDeleted = yield AuctionService_1.default.deleteAuction(auctionToDelete);
                return res.json(auctionDeleted);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new AuctionController();
