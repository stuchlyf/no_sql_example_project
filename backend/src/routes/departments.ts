import {Router} from 'express'
import {departmentModel} from "../model/Department";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const departments = await departmentModel.find().exec()

		res.status(200).json(departments);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const departmentId = req.params['id'];

	try {
		const department = await departmentModel.findById(departmentId);

		if (department === null || department === undefined) {
			throw new Error();
		}

		res.status(200).json(department);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400).send(`couldn't find department with id ${departmentId}`)
	}

	return res.send();
})

router.post('/', async (req, res) => {
	try {
		const department = new departmentModel({
			name: req.body.name,
			fee: req.body.fee
		})
		const e = department.validateSync();
		if(e) throw e;

		res.status(200).json(await department.save());
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400).send('invalid department');
	}

	return res.send();
})

router.put('/:id', async (req, res) => {
	const departmentId = req.params['id'];
	try {

		const department = await departmentModel.findByIdAndUpdate(departmentId, {
			name: req.body.name,
			fee: req.body.fee
		})
		res.status(200).json(department);
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.delete('/:id', async (req, res) => {
	const departmentId = req.params['id'];

	try {
		await departmentModel.findByIdAndDelete(departmentId);
		res.status(200);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400)
	}

	return res.send();
})

export default router;
