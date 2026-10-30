function nav() {
    return `<nav><a href="/">Home</a> | <a href="/contact">Contact</a> | <a href="/json">JSON Format</a></nav><br>`;
}

function home() {
    return `${nav()} Welcome home `;
}

function contact() {
    return `${nav()} Call me at 085759402332`;
}

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

module.exports = { nav, home, contact, students};