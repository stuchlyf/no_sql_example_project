import {model, Schema, Types} from 'mongoose'

interface DepartmentI {
	name: string;
	fee: number;
}

export const departmentSchema = new Schema<DepartmentI>({
	name: {type: String, required: true},
	fee: {type: Number, required: true}
});

export const departmentModel = model('Department', departmentSchema);