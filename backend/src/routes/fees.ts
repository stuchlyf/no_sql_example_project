import {Router} from 'express'
import {addCrudActionsToRouter} from "../utils/addCrudActionsToRouter";
import {baseFeeModel} from "../model/BaseFee";
import {BaseFeeTo} from "../model/Tos/BaseFeeTo";

const router = Router();

addCrudActionsToRouter(router, baseFeeModel, BaseFeeTo);

export default router;
