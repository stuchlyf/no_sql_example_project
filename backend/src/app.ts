import express from 'express';
import cors from 'cors';

const app = express();

app.use(
	cors({
		credentials: true,
		methods: ['POST', 'GET'],
		origin: 'http://localhost:3000',
	}),
);
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('ping');
});

export default app;