import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(8080, () => {
	console.log(`Server now listening on http://localhost:8080`);
});