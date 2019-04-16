import express from 'express'
import http from 'http';
import bodyParser from 'body-parser';

import {PORT} from './config';

const main = express();

const server = http.createServer(main);

server.listen(PORT, null, () => {
	console.log(`server is running on port: ${PORT}`);
});