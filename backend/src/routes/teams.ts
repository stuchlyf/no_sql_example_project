import {Router} from 'express'
import {teamModel} from "../model/Team";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const teams = await teamModel.find();

		res.status(200).json(teams);
	} catch (e) {
		res.status(400);
	}

	return res.send();
});

router.get('/:id', (req, res) => {

});

router.post('/', async (req, res) => {
	try {
		const team = new teamModel({
			name: req.body.name,
			league: req.body.league
		})
		const e = team.validateSync();
		if (e) throw e;

		res.status(200).json(await team.save());
	} catch (e) {
		res.status(400)
	}

	return res.send();
})

export default router;
