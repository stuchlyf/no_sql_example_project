import {model, Schema, Types} from 'mongoose';
import {EMAIL_REGEX, GENDER_REGEX, STREET_NUMBER_REGEX, TELEPHONE_NUMBER_REGEX} from "../utils/constants";
import {teamModel} from './Team';

export interface MemberI {
	_id: Types.ObjectId | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	email: string | undefined;
	telephoneNumber: string | undefined;
	street: string | undefined;
	streetNumber: string | undefined;
	city: string | undefined;
	zipCode: string | undefined;
	gender: 'm' | 'w' | 'd' | undefined;
	teamId: Types.ObjectId | undefined;
}

const teamIdValidator = async (teamId: Types.ObjectId): Promise<boolean> => {
	return await teamModel
			.exists({_id: teamId});
}

export const memberSchema = new Schema<MemberI>({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: false, validate: EMAIL_REGEX},
	telephoneNumber: {type: String, required: false, validate: TELEPHONE_NUMBER_REGEX},
	street: {type: String, required: true},
	streetNumber: {type: String, required: true, validate: STREET_NUMBER_REGEX},
	city: {type: String, required: true},
	zipCode: {type: String, required: true},
	gender: {type: String, required: false, validate: GENDER_REGEX},
	teamId: { type: Types.ObjectId, required: false, validate: teamIdValidator}
})


export const memberModel = model('Member', memberSchema);