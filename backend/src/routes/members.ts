import {Router} from 'express';
import {memberModel} from "../model/Member";
import {addCrudActionsToRouter} from "../utils/addCrudActionsToRouter";
import {MemberTo} from "../model/Tos/MemberTo";

const router = Router();

addCrudActionsToRouter(router, memberModel, MemberTo);

export default router;