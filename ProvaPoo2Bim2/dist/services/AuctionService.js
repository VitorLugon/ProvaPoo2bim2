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
const prisma = new client_1.PrismaClient();
class AuctionService {
    constructor() {
    }
    createAuction(auction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAuction = yield prisma.auction.create({
                    data: auction
                });
                return newAuction;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    findAuction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (id) {
                    const auction = yield prisma.auction.findUnique({
                        where: {
                            id
                        }
                    });
                    return auction;
                }
                else {
                    const auctions = yield prisma.auction.findMany();
                    return auctions;
                }
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    updateAuction(id, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leilaoUpdated = yield prisma.auction.update({
                    where: {
                        id
                    },
                    data: newData
                });
                return leilaoUpdated;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    deleteAuction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    return console.log("ID is not optional.");
                }
                yield prisma.auction.delete({ where: { id } });
                return "Ok";
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.default = new AuctionService();
