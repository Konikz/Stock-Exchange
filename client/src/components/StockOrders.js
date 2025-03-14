import React, { useEffect, useState } from "react";
import axios from "axios";

function StockOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders")
      .then(response => {
        console.log("Fetched Orders:", response.data); // ✅ Check if data appears in Console
        setOrders(response.data);
      })
      .catch(error => console.error("Error fetching orders:", error));
  }, []);  

  return (
    <div>
      <h2>Stock Orders</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.stock}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>
                <button>Buy</button>
                <button>Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockOrders;
