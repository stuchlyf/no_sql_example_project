import express from 'express';
import cors from 'cors';
// Routes
import teamsRoute from './routes/teams'
import membersRoute from './routes/members';
import feesRoute from './routes/fees';
import departmentsRoute from './routes/departments';
import projectsRoute from './routes/projects';
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

app.use('/teams', teamsRoute);
app.use('/members', membersRoute);
app.use('/fees', feesRoute);
app.use('/departments', departmentsRoute);
app.use('/projects', projectsRoute);

app.get('/', (req, res) => {

	res.status(200).send('ping');
});

export default app;