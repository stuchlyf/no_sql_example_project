import express from 'express';
import cors from 'cors';
// Routes
import clubsRoute from './routes/teams'
import membersRoute from './routes/members';
import {connectToDB} from './db';

const app = express();

connectToDB();

app.use(
	cors({
		credentials: true,
		methods: ['POST', 'GET'],
		origin: 'http://localhost:3000',
	}),
);
app.use(express.json());

app.use('/teams', clubsRoute);
app.use('/members', membersRoute);

app.get('/', (req, res) => {

	res.status(200).send('ping');
});

export default app;