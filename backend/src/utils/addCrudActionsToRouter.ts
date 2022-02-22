import { Router } from "express";
import { Model } from "mongoose";
import { TransferObjectConstructor } from "../model/Tos/TransferObject";

export const addCrudActionsToRouter = <T>(router: Router, model: Model<T>, to: TransferObjectConstructor<T>): void => {

  router.get('/', async (req, res) => {
    try {
      const result = await model.find().exec();

      if(result === null || result === undefined) {
        throw new Error();
      }

      const response = result.map(obj => new to(obj).toObj());

      res.status(200).json(response);
    } catch(e) {
      console.error(JSON.stringify(e));
      res.status(400);
    }

    return res.send();
  })

  router.get('/:id', async (req, res) => {
    const id = req.params['id'];

    try {
      const result = await model.findById(id);

      if (result === null || result === undefined) {
        throw new Error();
      }
      const response = new to(result).toObj();

      res.status(200).json(response)
    } catch(e) {
      console.error(JSON.stringify(e));
      res.status(400).send(`couldn't find entity with id ${id}`);
    }

    return res.send()
  });

  router.post('/', async (req, res) => {
    try {
      const transferObj = new to(req.body);
      const result = new model(transferObj.toObj());

      const e = result.validateSync();
      if(e) throw e;

      res.status(200).json(new to(await result.save()).toObj());
    }catch(e) {
      console.error(JSON.stringify(e));
      res.status(400).send('invalid');
    }

    return res.send();
  })

  router.put('/:id', async (req, res) => {
    const id = req.params['id'];

    try {
      const transferObj = new to(req.body);
      const result = await model.findByIdAndUpdate(id, transferObj.toObj());

      res.status(200).json(result);
    } catch (e) {
      console.error(JSON.stringify(e));
      res.status(400);
    }

    return res.send();
  })

  router.delete('/:id', async (req, res) => {
    const id = req.params['id'];

    try {
      await model.findByIdAndDelete(id);
      res.status(200);
    } catch(e) {
      console.error(JSON.stringify(e));
      res.status(400);
    }

    return res.send();
  })
}
