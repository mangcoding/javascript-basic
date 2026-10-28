const os = require('os');
const url = require('url');
//Langsung ke fungsi tertentu
const { workDaysDiffExcludeHolidays } = require('./datediff');
// dipanggil sebagai objek baru 
// const df = require('./datediff');
// cara manggilnya df.functionYangDipanggil

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

const holidays = [
    '2026-05-01',
    '2026-05-14',
    '2026-05-15',
    '2026-05-27',
    '2026-05-28',
    '2026-05-31',
    '2026-06-01',
    '2026-06-16',
    '2026-08-17',
    '2026-08-25',
];

const start = '2026-05-01';
const end = '2026-10-27';
const diff = workDaysDiffExcludeHolidays(start,end,holidays);
console.log(`Jumlah hari kerja adalah adalah ${diff} `);
