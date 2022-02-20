interface ISecrets {
	dbUsername: string | undefined;
	dbPassword: string | undefined;
	dbUrl: string | undefined;
	dbDatabase: string | undefined;
}

class Secrets implements ISecrets{
	get dbUsername() {
		return process.env["DB_USERNAME"];
	}

	get dbPassword() {
		return process.env["DB_PASSWORD"];
	}

	get dbUrl() {
		return process.env["DB_URL"];
	}

	get dbDatabase() {
		return process.env["DB_DATABASE"];
	}
}

export const secrets = new Secrets();