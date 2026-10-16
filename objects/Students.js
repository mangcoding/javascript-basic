const wives = [
    {
        "name" : "Siti Mirna",
        "phone" : "029292828112"
    },
    {
        "name" : "Bertania",
        "phone" : "092928281125"
    }
];
const students = [
    {
        "name" : "Anton Bareuh",
        "address": "Bandung"
    },
    {
        "name" : "Adi Hilap",
        "address": "Sukabumi"
    },
    {
        "name" : "Regith Nurmala",
        "address": [
            {
                "city" : "Sukabumi City",
                "province": "West Java"
            },
            {
                "city" : "Senayan",
                "Province": "DKI Jakarta"
            }
        ],
        "wives": wives
    }
]
console.log(students[2].address[0].city);