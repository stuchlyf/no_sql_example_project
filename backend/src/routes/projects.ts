import {Router} from 'express'
import {projectModel} from "../model/Project";
import {addCrudActionsToRouter} from "../utils/addCrudActionsToRouter";
import {ProjectTo} from "../model/Tos/ProjectTo";

const router = Router();

addCrudActionsToRouter(router, projectModel, ProjectTo);

export default router;
