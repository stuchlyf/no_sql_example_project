interface SecretsI {
	DB_USERNAME: string | undefined;
	DB_PASSWORD: string| undefined;
	DB_URL: string| undefined;
	DB_DATABASE: string| undefined;
}

const secrets: SecretsI = {
	DB_USERNAME: process.env["DB_USERNAME"],
	DB_PASSWORD: process.env["DB_PASSWORD"],
	DB_URL: process.env["DB_URL"],
	DB_DATABASE: process.env["DB_DATABASE"]
}

export const getSecret = (secretKey: keyof SecretsI): string | undefined => {
	return secrets[secretKey];
}