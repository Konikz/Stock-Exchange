export interface User {
    id: number;
    balance: number;
    portfolio: Record<string, number>; // { "AAPL": 10, "TSLA": 5 }
  }
  
  export interface Trade {
    userId: number;
    stock: string;
    price: number;
    quantity: number;
    type: "BUY" | "SELL";
  }
  
  export const users: Record<number, User> = {}; // User data storage
  export const trades: Trade[] = []; // Store executed trades
  export const stockPrices: Record<string, number> = { // Simulated prices
    AAPL: 150,
    TSLA: 200,
    GOOGL: 2800
  };
  