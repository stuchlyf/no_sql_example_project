import {Schema, model, Types} from 'mongoose';
import {MemberI, memberSchema} from "./Member";

export interface TeamI {
	_id: Types.ObjectId;
	name: string;
	league: string;
	players: Array<MemberI>
}

export const teamSchema = new Schema<TeamI>({
	name: { type: String, required: true },
	league: { type: String, required: false},
})

export const teamModel = model<TeamI>('Teams', teamSchema)
