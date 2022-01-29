import {Router} from 'express'
import {departmentModel} from "../model/Department";
import { DepartmentTo } from '../model/Tos/DepartmentTo';
import { addCrudActionsToRouter } from '../utils/addCrudActionsToRouter';

const router = Router();

addCrudActionsToRouter(router, departmentModel, DepartmentTo);

export default router;
