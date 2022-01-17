import {model, Schema, Types} from 'mongoose';

interface ProjectI {
	location: string;
	date: Date;
}

export const projectSchema = new Schema<ProjectI>({
	location: { type: String, required: true},
	date: {type: Date, required: true}
})

export const projectModel = model('Project', projectSchema);