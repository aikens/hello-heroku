const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	res.end('<html><h1>Hello World 2.0!</h1></html>\n');
});

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}/`);
});
