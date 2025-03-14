const fs = require("fs");

let buyOrders = [];
let sellOrders = [];
let trades = [];

const matchOrders = () => {
    while (buyOrders.length > 0 && sellOrders.length > 0) {
        let buy = buyOrders[0]; 
        let sell = sellOrders[0];

        if (buy.price >= sell.price) {  
            let trade = {
                buyer: buy.user,
                seller: sell.user,
                price: sell.price,  
                quantity: Math.min(buy.quantity, sell.quantity),
                timestamp: new Date().toISOString(),
            };
            trades.push(trade);

            if (buy.quantity > sell.quantity) {
                buy.quantity -= sell.quantity;
                sellOrders.shift();
            } else if (buy.quantity < sell.quantity) {
                sell.quantity -= buy.quantity;
                buyOrders.shift();
            } else {
                buyOrders.shift();
                sellOrders.shift();
            }
        } else {
            break;
        }
    }
    fs.writeFileSync("server/trades.json", JSON.stringify(trades, null, 2), { flag: "w" });
};

const addOrder = (order) => {
    if (order.type === "buy") {
        buyOrders.push(order);
        buyOrders.sort((a, b) => b.price - a.price);
    } else {
        sellOrders.push(order);
        sellOrders.sort((a, b) => a.price - b.price);
    }
    matchOrders();
};

const getOrderBook = () => {
    return {
        buyOrders,
        sellOrders
    };
};

module.exports = { addOrder, getOrderBook };
