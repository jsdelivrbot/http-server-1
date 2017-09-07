const { readFile } = require('fs');
const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
	console.log('request method', req.method, 'request url', req.url, 'request headers', req.headers);
	readFile('index.html', (err, buff) => {
		if(err) {
			res.statusCode = (418);
			res.end("sorry, not found");
		}
		res.end(buff);
	});
});

server.listen(8080, () => {
	console.log('listening on PORT 8080');
})