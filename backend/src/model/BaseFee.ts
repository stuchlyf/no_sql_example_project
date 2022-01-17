import {model, Schema, Types} from 'mongoose';

interface BaseFeeI {
	group: string;
	fee: number;
}

export const baseFeeSchema = new Schema<BaseFeeI>({
	group: {type: String, required: true},
	fee: {type: Number, required: true}
})

export const baseFeeModel = model('BaseFee', baseFeeSchema);