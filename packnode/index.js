const os = require('os');
const url = require('url');

console.log(`Hostname ${os.hostname()}`);
console.log(`Plattform ${os.platform()}`);
console.log(`Arch ${os.arch()}`);

const parseURL = url.parse('https://bitbucket.org/devteamits/w4r-2025/commits');

const host = parseURL.hostname;
console.log(host);

const path = parseURL.pathname;
console.log(path);

const slugs = path.split("/");
const last_slug = slugs[slugs.length-1];
console.log(last_slug);

