# **Stock Exchange**

A simple stock exchange project that demonstrates how to manage buy/sell orders using **Node.js**, **Express**, **MongoDB**, and **React**.

## **Table of Contents**
1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Installation](#installation)  
5. [Project Structure](#project-structure)  
6. [Running the Project](#running-the-project)  
7. [Usage](#usage)  
8. [Troubleshooting](#troubleshooting)  
9. [Contributing](#contributing)  
10. [License](#license)  

---

## **Features**
- **Order Management**: Create and view stock orders (buy/sell).  
- **RESTful API**: Node.js/Express handles backend routes.  
- **MongoDB Integration**: Stores persistent orders.  
- **React Frontend**: Displays orders in a table with Buy/Sell buttons.

---

## **Tech Stack**
- **Backend**: Node.js, Express, Mongoose (MongoDB driver)  
- **Database**: MongoDB  
- **Frontend**: React (Create React App)

---

## **Prerequisites**
1. **Node.js** (v14+ recommended)  
2. **npm** (comes with Node) or **yarn**  
3. **MongoDB** (installed locally or running in a container)  

---

## **Installation**

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Konikz/Stock-Exchange.git
   cd Stock-Exchange
   ```

2. **Install Root Dependencies**  
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**  
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Install Backend Dependencies**  
   ```bash
   cd server
   npm install
   cd ..
   ```

---

## **Project Structure**
```
Stock-Exchange
├── client
│   ├── src
│   │   ├── components
│   │   │   └── StockOrders.js
│   │   └── App.js
│   ├── package.json
│   └── ...
├── server
│   ├── index.js
│   ├── package.json
│   └── ...
├── package.json
└── README.md
```

- **client/**: React frontend.  
- **server/**: Node.js + Express backend.  
- **package.json (root)**: Holds scripts for running both frontend & backend together using **concurrently**.

---

## **Running the Project**

### **1. Ensure MongoDB Is Running**
- If using a local MongoDB:
  ```bash
  mongod --dbpath /data/db --bind_ip 0.0.0.0 --logpath /tmp/mongodb.log --logappend
  ```
- Or ensure your MongoDB service is running (e.g., `service mongod start`).

### **2. Run the Dev Script**
From the **project root**, run:
```bash
npm run dev
```
This will:
1. Start MongoDB (if configured in `dev` script).
2. Launch the Node.js server on port `3000`.
3. Launch the React app on port `3001`.

---

## **Usage**

1. **Open the Frontend**  
   Visit [http://localhost:3001](http://localhost:3001) in your browser.

2. **Check the Backend**  
   - API Endpoint: [http://localhost:3000/api/orders](http://localhost:3000/api/orders)

3. **Placing Orders**  
   - Currently, orders are fetched automatically from MongoDB.  
   - Use the **Buy** and **Sell** buttons (if implemented) to place or manage orders.  
   - Or send requests to the backend with Postman/cURL:
     ```bash
     curl -X POST http://localhost:3000/api/orders \
     -H "Content-Type: application/json" \
     -d '{"stock":"AAPL","price":150,"quantity":10}'
     ```

---

## **Troubleshooting**
1. **MongoDB Connection Error**  
   - Ensure MongoDB is running locally.  
   - Check your `mongoose.connect(...)` URI in `server/index.js`.

2. **Port Already in Use**  
   - If you see `EADDRINUSE: address already in use :::3000`, kill the existing process or change ports.

3. **CORS Errors**  
   - Make sure you have `app.use(cors())` in `server/index.js`.

4. **React Not Showing Data**  
   - Check console logs in the browser dev tools.  
   - Confirm your API endpoint returns data at `http://localhost:3000/api/orders`.

---

## **Contributing**
1. Fork the repo
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make changes and commit: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Create a Pull Request

---

## **License**
This project is open-source. Feel free to modify or distribute it. If you add enhancements, consider contributing back!

---

Feel free to customize this README to match your exact project details. Happy coding!

