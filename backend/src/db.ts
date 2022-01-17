import mongoose from 'mongoose';
import {getSecret} from "./utils/getSecret";
export const connectToDB = () => {
	try {
		const connectString = `mongodb://${getSecret('DB_USERNAME')}:${getSecret('DB_PASSWORD')}@${getSecret('DB_URL')}/${getSecret("DB_DATABASE")}`

		mongoose.connect(connectString, (e) => {
			if (e) throw e;
			console.log('successfully connected!');
		})
	} catch(e) {
		console.error('there was an error running the application: ', e);
	}
}