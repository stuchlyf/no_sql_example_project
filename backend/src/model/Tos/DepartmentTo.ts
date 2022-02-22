import { DepartmentI } from "../Department";
import {Types} from 'mongoose';
import { TransferObject, TransferObjectConstructor } from "./TransferObject";



export const DepartmentTo: TransferObjectConstructor<DepartmentI> = class implements TransferObject<DepartmentI> {
  private _id: Types.ObjectId | undefined;
  private name: string | undefined;
  private fee: number | undefined;
  private readonly mandatoryKeys: Array<keyof DepartmentI> = ['name', 'fee'];

  constructor(o: object | DepartmentI = {}) {
      const obj: DepartmentI = <DepartmentI> o;
      this._id = obj._id;
      this.name = obj.name;
      this.fee = obj.fee

  }


  toObj() {
    return {
      _id: this._id,
      name: this.name,
      fee: this.fee
    }
  }
}