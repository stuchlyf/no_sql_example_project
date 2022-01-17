import {Router} from 'express';
import {memberModel} from "../model/Member";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const members = await memberModel.find().exec()

		res.status(200).json(members);
	} catch (e) {
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const memberId = req.params['id'];

	try {
		const member = await memberModel.findById(memberId);

		if (member === null || member === undefined) {
			throw new Error();
		}

		res.status(200).json(member);
	} catch (e) {
		res.status(400).send(`couldn't find member with id ${memberId}`)
	}

	return res.send();
})

router.post('/', async (req, res) => {
	try {
		const member = new memberModel({
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

		const e = member.validateSync();
		if(e) throw e;

		res.status(200).json(await member.save());
	} catch(e) {
		res.status(400).send('invalid member');
	}

	return res.send();
})

router.put('/:id', async (req, res) => {
	const memberId = req.params['id'];
	try {

		const member = await memberModel.findByIdAndUpdate(memberId, {
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
		res.status(200).json(member);
	} catch(e) {
		res.status(400);
	}

	return res.send();
})

router.delete('/:id', async (req, res) => {
	const memberId = req.params['id'];

	try {
		await memberModel.findByIdAndDelete(memberId);
		res.status(200);
	} catch (e) {
		res.status(400)
	}

	return res.send();
})

export default router;