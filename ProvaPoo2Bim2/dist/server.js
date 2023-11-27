"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const AuctionRouter_1 = __importDefault(require("./routes/AuctionRouter"));
const BidRouter_1 = __importDefault(require("./routes/BidRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(UserRouter_1.default);
app.use(AuctionRouter_1.default);
app.use(BidRouter_1.default);
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
