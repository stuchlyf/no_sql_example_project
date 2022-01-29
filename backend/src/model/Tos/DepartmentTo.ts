import { DepartmentI } from "../Department";
import {Types} from 'mongoose';
import { TransferObject, TransferObjectConstructor } from "./TransferObject";



export const DepartmentTo: TransferObjectConstructor<DepartmentI> = class implements TransferObject<DepartmentI> {
  private _id: Types.ObjectId | undefined;
  private name: string | undefined;
  private fee: number | undefined;
  private readonly mandatoryKeys: Array<keyof DepartmentI> = ['name', 'fee'];

  constructor(o: object | DepartmentI = {}) {
    if(this.mandatoryKeys.every(el => Object.keys(o).includes(el))) {
      const obj: DepartmentI = <DepartmentI> o;
      this._id = obj._id;
      this.name = obj.name;
      this.fee = obj.fee
    } else {
      throw new Error(`couldn't create Department from object: ${JSON.stringify(o)}`);
    }
  }


  toObj() {
    return {
      _id: this._id,
      name: this.name,
      fee: this.fee
    }
  }
}