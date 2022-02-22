import { Types } from "mongoose";
import { TeamI } from "../Team";
import { TransferObjectConstructor, TransferObject } from "./TransferObject";
import {MemberI, memberModel} from "../Member";
import {MemberTo} from "./MemberTo";

export const TeamTo: TransferObjectConstructor<TeamI> = class implements TransferObject<TeamI> {
  private _id: Types.ObjectId | undefined;
  private name: string | undefined;
  private league: string | undefined;
  private get players(): Promise<Array<TransferObject<MemberI>>> {
    return (async () => (
        await memberModel
            .find({teamId: this._id}))
            .map(member => new MemberTo(member))
    )();
  }

  private readonly mandatoryKeys: Array<keyof TeamI> = ['name'];

  constructor(o: object | TeamI = {}) {
      const obj: TeamI = <TeamI> o;

      this._id = obj._id;
      this.name = obj.name;
      this.league = obj.league;
  }

  toObj() {
    let players: Array<TransferObject<MemberI>> = [];

    this.players.then(_players => players = _players);

    return {
      _id: this._id,
      name: this.name,
      league: this.league,
      players: players,
    }
  }

  toString(): string {
    return JSON.stringify(this.toObj());
  }
}