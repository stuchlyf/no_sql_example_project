import mongoose from 'mongoose';
import {secrets} from "./utils/Secrets";

export const connectToDB = () => {
	try {
		const connectString = `mongodb://${secrets.dbUsername}:${secrets.dbPassword}@${secrets.dbUrl}/${secrets.dbDatabase}`
		console.log(`authenticating with ${connectString}`);
		mongoose.connect(connectString, (e) => {
			if (e) throw e;
			console.log('successfully connected!');
		})
	} catch(e) {
		console.error('there was an error running the application: ', e);
	}
}