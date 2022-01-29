import {model, Schema, Types} from 'mongoose';

export interface ProjectI {
	_id: Types.ObjectId | undefined;
	location: string | undefined;
	date: Date | undefined;
}

export const projectSchema = new Schema<ProjectI>({
	location: { type: String, required: true},
	date: {type: Date, required: true}
})

export const projectModel = model('Project', projectSchema);