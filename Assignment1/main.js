
const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Root</title><head>');
        res.write('<body>');
        res.write('<h1>Hola este es el root</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>')
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        // console.log("got to /create-user")
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk)
            body.push(chunk);
        })
        req.on('end', () => {
            // console.log("finished");
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split('=')[1]
            console.log(data);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    if (url == '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Mi response</title><head>')
        res.write('<body>');
        res.write('<ul><li>Erick</li><li>Liz</li><li>Ale</li></ul>');
        res.write('</body>');
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);