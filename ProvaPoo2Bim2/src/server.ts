import express from 'express';
import UserRouter from './routes/UserRouter';
import AuctionRouter from './routes/AuctionRouter';
import BidRouter from './routes/BidRouter';

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(AuctionRouter);
app.use(BidRouter);



app.listen(3000, function(){
    console.log("Server running on port 3000");
})