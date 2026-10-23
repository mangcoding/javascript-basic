const wives = [
    {
        "name" : "Siti Mirna",
        "phone2" : "029292828112"
    },
    {
        "name" : "Bertania",
        "phone" : "092928281125"
    }
];
const students = [
    {
        "name" : "Anton Bareuh",
        "address": "Bandung",
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
    },
]

for (let item of students) {
    item.status = item.hasOwnProperty("wives") ? "Married" : "Single";
    console.log(item.name+" : "+item.status);
}

let total_married = students.filter((item)=>item.status=="Married").length;
let total_single = students.length - total_married;

console.log("Total Married : "+total_married);
console.log("Total Single : "+total_single);



//Expected Output:
/*

Anton Bareuh : Single
Adi Hilap : Single
Regith Nurmala : Married

Total Married : 1
Total Single : 2

*/