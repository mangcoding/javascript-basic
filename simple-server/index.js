const http = require('http');
const port = 8008;

function nav() {
    return `<nav><a href="/">Home</a> | <a href="/contact">Contact</a></nav><br>`;
}

function home() {
    return `${nav()} Welcome home `;
}

function contact() {
    return `${nav()} Call me at 085759402332`;
}

const server = http.createServer((req,res) => {
    const routes = req.url;
    res.writeHead(200, {'Content-type': 'text/html'});
    if (routes === '/')
        res.write(home());
    else if (routes === '/contact')
        res.write(contact());

    res.end();
})

server.listen(port, ()=> {
    console.log(`Server is running under 127.0.0.1:${port}`)
});