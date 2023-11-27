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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
class BidService {
    constructor() { }
    createBid(bid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBid = yield prisma.bid.create({
                    data: bid
                });
                return newBid;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    findBid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (id) {
                    const bid = yield prisma.bid.findUnique({
                        where: {
                            id
                        }
                    });
                    return bid;
                }
                else {
                    const bids = yield prisma.bid.findMany();
                    return bids;
                }
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    updateBid(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bidUpdated = yield prisma.bid.update({
                    where: {
                        id
                    },
                    data: newData
                });
                return bidUpdated;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    deleteBid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    return console.log("ID is not optional.");
                }
                yield prisma.bid.delete({ where: { id } });
                return "Ok";
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.default = new BidService();
