import {model, Schema, Types} from 'mongoose';

export interface BaseFeeI {
	_id: Types.ObjectId | undefined;
	group: string | undefined;
	fee: number | undefined;
}

export const baseFeeSchema = new Schema<BaseFeeI>({
	group: {type: String, required: true},
	fee: {type: Number, required: true}
})

export const baseFeeModel = model('BaseFee', baseFeeSchema);