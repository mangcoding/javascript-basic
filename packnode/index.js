const os = require('os');
const url = require('url');
const datediff = require('./datediff');

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

holidays = [
    '2026-02-16',
    '2026-02-17',
    '2026-03-20',
    '2026-03-21',
    '2026-03-22',
    '2026-03-23',
    '2026-03-24',
    '2026-04-03',
    '2026-04-05',
    '2026-05-01',
    '2026-05-14',
    '2026-05-15',
    '2026-05-27',
    '2026-05-28',
    '2026-05-31',
    '2026-06-01',
    '2026-06-16',
];

const diff = datediff('2026-02-03', '2026-06-11',holidays);
console.log(`Total hari kerja ${diff}`);