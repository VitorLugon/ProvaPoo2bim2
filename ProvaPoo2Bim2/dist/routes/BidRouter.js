"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BidController_1 = __importDefault(require("../controllers/BidController"));
const BidRouter = (0, express_1.Router)();
BidRouter.get("/bid", BidController_1.default.listBid);
BidRouter.post("/bid", BidController_1.default.createBid);
BidRouter.put("/bid", BidController_1.default.updateBid);
BidRouter.delete("/bid", BidController_1.default.deleteBid);
exports.default = BidRouter;
