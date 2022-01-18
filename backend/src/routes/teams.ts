import {Router} from 'express'
import {teamModel} from "../model/Team";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const members = await teamModel.find().exec()

		res.status(200).json(members);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const teamId = req.params['id'];

	try {
		const member = await teamModel.findById(teamId);

		if (member === null || member === undefined) {
			throw new Error();
		}

		res.status(200).json(member);
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
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			street: req.body.street,
			streetNumber: req.body.streetNumber,
			city: req.body.city,
			zipCode: req.body.zipCode,
			gender: req.body.gender,
			email: req.body.email,
			telephoneNumber: req.body.telephoneNumber,
			teamId: req.body.teamId
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
