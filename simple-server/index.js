const http = require('http');
const port = 8008;
const { home, contact, students } = require("./content");

function jsonText() {
    return JSON.stringify(students);
}

const server = http.createServer((req,res) => {
    const routes = req.url;
    res.writeHead(200, {'Content-type': routes === '/json' ? 'application/json' :'text/html'});
    if (routes === '/')
        res.write(home());
    else if (routes === '/contact')
        res.write(contact());
    else if (routes === '/json')
        res.write(jsonText());
    res.end();
})

server.listen(port, ()=> {
    console.log(`Server is running under 127.0.0.1:${port}`)
});