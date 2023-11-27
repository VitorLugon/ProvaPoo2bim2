"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuctionController_1 = __importDefault(require("../controllers/AuctionController"));
const AuctionRouter = (0, express_1.Router)();
AuctionRouter.get("/auction", AuctionController_1.default.listAuction);
AuctionRouter.post("/auction", AuctionController_1.default.createAuction);
AuctionRouter.put("/auction", AuctionController_1.default.updateAuction);
AuctionRouter.delete("/auction", AuctionController_1.default.deleteAuction);
exports.default = AuctionRouter;
