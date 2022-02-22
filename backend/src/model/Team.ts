import {Schema, model, Types} from 'mongoose';

export interface TeamI {
	_id: Types.ObjectId | undefined;
	name: string | undefined;
	league: string | undefined;
}

export const teamSchema = new Schema<TeamI>({
	name: { type: String, required: true },
	league: { type: String, required: false},
})

export const teamModel = model<TeamI>('Teams', teamSchema)
