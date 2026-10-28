const os = require('os');
const url = require('url');

function getLatestSlug(url) {
    urls = url.split("/");
    return urls[urls.length - 1];
}

console.log(`Hostname : ${os.hostname()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`CPU Arch : ${os.arch()}`)

const urlx = 'https://github.com/mangcoding/javascript-basic/tree/main/project-calc';

const urlParse = url.parse(urlx);
console.log(urlParse.host);
console.log(urlParse.pathname);
console.log(getLatestSlug(urlx));


