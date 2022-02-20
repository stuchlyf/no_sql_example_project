import {Router} from 'express'
import {teamModel} from "../model/Team";
import {addCrudActionsToRouter} from "../utils/addCrudActionsToRouter";
import {TeamTo} from "../model/Tos/TeamTo";

const router = Router();

addCrudActionsToRouter(router, teamModel, TeamTo);

export default router;
