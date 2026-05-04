import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

app.use(express.json()); // מאפשר לעבוד עם JSON ב-Body

app.get('/', (req: Request, res: Response) => {
  res.send('Simple Express + TS Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});