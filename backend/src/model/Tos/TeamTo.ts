import { Types } from "mongoose";
import { TeamI } from "../Team";
import { TransferObjectConstructor, TransferObject } from "./TransferObject";
import { MemberTo } from "./MemberTo";

export const TeamTo: TransferObjectConstructor<TeamI> = class implements TransferObject<TeamI> {
  private _id: Types.ObjectId | undefined;
  private name: string | undefined;
  private league: string | undefined;
  private players: Array<typeof MemberTo> | undefined;
}