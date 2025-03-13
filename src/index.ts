import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
app.use(bodyParser.json());

interface User {
    id: number;
    balance: number;
    assets: number;
}

// Declare users BEFORE using it
let users: Record<number, User> = {};

// ✅ Fix: Ensure correct TypeScript typing
app.post('/user', (req: Request, res: Response): Response => {  
    const { id, balance, assets } = req.body;

    if (!id || balance === undefined || assets === undefined) {
        return res.status(400).json({ error: 'ID, balance, and assets are required.' });
    }

    if (users[id]) {
        return res.status(400).json({ error: 'User ID already exists.' });
    }

    users[id] = { id, balance, assets };

    return res.status(201).json(users[id]);
});

// ✅ Fix: Ensure correct TypeScript typing
app.get('/user/:id', (req: Request, res: Response): Response => {  
    const userId = parseInt(req.params.id, 10);

    if (!users[userId]) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(users[userId]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
