const os = require('os');
const url = require('url');

function getLastSlug(url) {
    const urls = url.split("/");
    return urls[urls.length - 1];
}

console.log(`Hostname : ${os.hostname()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`CPU Arch : ${os.arch()}`);

const parsedUrl = 'https://docs.google.com/presentation/d/1wcLjMjnH2WTHX_YZLbIiqTxH_noKdwE8/edit?slide=id.p6#slide=id.p6';

const parseUrl = url.parse(parsedUrl);
console.log(parseUrl.host);
console.log(parseUrl.pathname);

//get the last slug
console.log(getLastSlug(parseUrl.pathname))

