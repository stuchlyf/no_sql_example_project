import { TransferObjectConstructor, TransferObject } from "./TransferObject";
import {BaseFeeI} from '../BaseFee';
import { Types } from "mongoose";


export const BaseFeeTo: TransferObjectConstructor<BaseFeeI> = class implements TransferObject<BaseFeeI> {
  private _id: Types.ObjectId | undefined;
  private group: string | undefined;
  private fee: number | undefined;

  private readonly mandatoryKeys: Array<keyof BaseFeeI> = ['fee', 'group'];

  constructor(o: object | BaseFeeI = {}) {
      const obj: BaseFeeI = <BaseFeeI> o;

      this._id = obj._id;
      this.group = obj.group;
      this.fee = obj.fee;
  }

  toObj(): BaseFeeI {
      return {
        _id: this._id,
        group: this.group,
        fee: this.fee
      }
  }
}