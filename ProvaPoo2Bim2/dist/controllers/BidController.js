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
const BidService_1 = __importDefault(require("../services/BidService"));
class BidController {
    constructor() { }
    listBid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bid = yield BidService_1.default.findBid();
            return res.status(200).json({
                status: "OK",
                bid: bid,
            });
        });
    }
    createBid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (data) {
                const newBid = BidService_1.default.createBid(data);
                res.status(200).json({
                    status: '20',
                    newBid: newBid
                });
            }
            else {
                res.status(400).json({
                    status: "error",
                    mensage: "Missing data"
                });
            }
            res.end('Bid created');
        });
    }
    updateBid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bidToUpdate = req.params.id;
                const { product, price, limitData, ownerId } = req.body;
                const bidUpdated = yield BidService_1.default.updateBid(bidToUpdate, req.body);
                return res.json(bidUpdated);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteBid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bidToDelete = req.params.lanceId;
                const bidDeleted = yield BidService_1.default.deleteBid(bidToDelete);
                return res.json(bidDeleted);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new BidController();
