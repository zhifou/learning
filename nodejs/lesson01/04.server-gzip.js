const zlib = require('zlib');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const raw = fs.createReadStream(__dirname, + '/index.html');
    const acceptEncoding = request.headers['accept-encoding'] || '';
    response.setHeader('Content-Type', 'text/plain');
    console.log(acceptEncoding);

    if (acceptEncoding.includes('gzip')) {
        console.log('encoding with gzip');
        response.setHeader('Content-Type', 'gzip');
        raw.pipe(zlib.createGzip()).pipe(response);
    } else {
        console.log('no encoding ');
        raw.pipe(response);
    }
})
