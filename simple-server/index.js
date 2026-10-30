const http = require('http');
const port = 8008;

function nav() {
    return `<nav><a href="/">Home</a> | <a href="/contact">Contact</a> | <a href="/json">JSON Format</a></nav><br>`;
}

function home() {
    return `${nav()} Welcome home `;
}

function contact() {
    return `${nav()} Call me at 085759402332`;
}

function jsonText() {
    const students = [
        {
            name:"Regith",
            wives: [
                "Mirna",
                "Syifa"
            ]
        },
        {
            name:"Zidane",
            wives:null
        }
    ];
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