import {model, Schema, Types} from 'mongoose'

export interface DepartmentI {
	_id: Types.ObjectId | undefined;
	name: string | undefined;
	fee: number | undefined;
}

export const departmentSchema = new Schema<DepartmentI>({
	name: {type: String, required: true},
	fee: {type: Number, required: true}
});

export const departmentModel = model('Department', departmentSchema);