import {Router} from 'express'
import {projectModel} from "../model/Project";

const router = Router();

router.get('/', async (req, res) => {
	try {
		const projects = await projectModel.find().exec()

		res.status(200).json(projects);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.get('/:id', async (req, res) => {
	const projectId = req.params['id'];

	try {
		const project = await projectModel.findById(projectId);

		if (project === null || project === undefined) {
			throw new Error();
		}

		res.status(200).json(project);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400).send(`couldn't find project with id ${projectId}`)
	}

	return res.send();
})

router.post('/', async (req, res) => {
	try {
		const project = new projectModel({
			location: req.body.location,
			date: req.body.date
		})
		const e = project.validateSync();
		if(e) throw e;

		res.status(200).json(await project.save());
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400).send('invalid project');
	}

	return res.send();
})

router.put('/:id', async (req, res) => {
	const projectId = req.params['id'];
	try {

		const project = await projectModel.findByIdAndUpdate(projectId, {
			location: req.body.location,
			date: req.body.date
		})
		res.status(200).json(project);
	} catch(e) {
		console.error(JSON.stringify(e))
		res.status(400);
	}

	return res.send();
})

router.delete('/:id', async (req, res) => {
	const projectId = req.params['id'];

	try {
		await projectModel.findByIdAndDelete(projectId);
		res.status(200);
	} catch (e) {
		console.error(JSON.stringify(e))
		res.status(400)
	}

	return res.send();
})

export default router;
