import {Router} from 'express'
import {teamModel} from "../model/Team";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const teams = await teamModel.find().exec()

		res.status(200).json(teams);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const teamId = req.params['id'];

	try {
		const team = await teamModel.findById(teamId);

		if (team === null || team === undefined) {
			throw new Error();
		}

		res.status(200).json(team);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400).send(`couldn't find member with id ${teamId}`)
	}

	return res.send();
})

router.post('/', async (req, res) => {
	try {
		const team = new teamModel({
			name: req.body.name,
			league: req.body.league
		})
		const e = team.validateSync();
		if(e) throw e;

		res.status(200).json(await team.save());
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400).send('invalid member');
	}

	return res.send();
})

router.put('/:id', async (req, res) => {
	const teamId = req.params['id'];
	try {

		const team = await teamModel.findByIdAndUpdate(teamId, {
			name: req.body.name,
			league: req.body.league
		})
		res.status(200).json(team);
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.delete('/:id', async (req, res) => {
	const teamId = req.params['id'];

	try {
		await teamModel.findByIdAndDelete(teamId);
		res.status(200);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400)
	}

	return res.send();
})

export default router;
