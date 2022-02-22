import { Types } from "mongoose";
import { TeamI } from "../Team";
import { TransferObjectConstructor, TransferObject } from "./TransferObject";

export const TeamTo: TransferObjectConstructor<TeamI> = class implements TransferObject<TeamI> {
  private _id: Types.ObjectId | undefined;
  private name: string | undefined;
  private league: string | undefined;

  private readonly mandatoryKeys: Array<keyof TeamI> = ['name'];

  constructor(o: object | TeamI = {}) {
      const obj: TeamI = <TeamI> o;

      this._id = obj._id;
      this.name = obj.name;
      this.league = obj.league;
  }

  toObj() {
    return {
      _id: this._id,
      name: this.name,
      league: this.league,
    }
  }

  toString(): string {
    return JSON.stringify(this.toObj());
  }
}