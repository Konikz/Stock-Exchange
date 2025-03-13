import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
  });  

app.post("/user", (req: Request, res: Response) => {
  res.json({ message: "User Created" });
});

app.get("/user/:id", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

app.post("/trade", (req: Request, res: Response) => {
  res.json({ message: "Trade Created" });
});

app.get("/trades", (req: Request, res: Response) => {
  res.json({ trades: [] });
});

app.listen(3000, () => console.log("Server running on port 3000"));
