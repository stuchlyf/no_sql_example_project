import {Router} from 'express'
import {baseFeeModel} from "../model/BaseFee";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const fees = await baseFeeModel.find().exec()

		res.status(200).json(fees);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const feeId = req.params['id'];

	try {
		const fee = await baseFeeModel.findById(feeId);

		if (fee === null || fee === undefined) {
			throw new Error();
		}

		res.status(200).json(fee);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400).send(`couldn't find fee with id ${feeId}`)
	}

	return res.send();
})

router.post('/', async (req, res) => {
	try {
		const fee = new baseFeeModel({
			name: req.body.name,
			league: req.body.league
		})
		const e = fee.validateSync();
		if(e) throw e;

		res.status(200).json(await fee.save());
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400).send('invalid fee');
	}

	return res.send();
})

router.put('/:id', async (req, res) => {
	const feeId = req.params['id'];
	try {

		const fee = await baseFeeModel.findByIdAndUpdate(feeId, {
			name: req.body.name,
			league: req.body.league
		})
		res.status(200).json(fee);
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.delete('/:id', async (req, res) => {
	const feeId = req.params['id'];

	try {
		await baseFeeModel.findByIdAndDelete(feeId);
		res.status(200);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400)
	}

	return res.send();
})

export default router;
