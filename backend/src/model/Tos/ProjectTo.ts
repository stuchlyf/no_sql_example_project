import { TransferObject, TransferObjectConstructor } from "./TransferObject";
import {ProjectI} from '../Project';
import { Types } from "mongoose";

export const ProjectTo: TransferObjectConstructor<ProjectI> = class implements TransferObject<ProjectI> {
  private _id: Types.ObjectId | undefined;
  private location: string | undefined;
  private date: Date | undefined;

  private readonly mandatoryKeys: Array<keyof ProjectI> = ['date', 'location']

  constructor(o: object | ProjectI = {})  {
      const obj: ProjectI = <ProjectI> o;

      this._id = obj._id;
      this.date = obj.date;
      this.location = obj.location;
  }

  toObj(): ProjectI {
      return {
        _id: this._id,
        date: this.date,
        location: this.location
      }
  }
}