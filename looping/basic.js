for (let i=0; i<20; i++) {
    console.log("I love you so much !!");
}

let x=0;
while(x<20) {
    console.log("I love you again !!");
    x++;
}

let a=0;
do {
    console.log("I love you till the end !!");
    a++;
}while(a<0);


const students = ["Mirna", "Syifa", "Regith", "Amgad", "Faizi"];

for (const i in students) {
    console.log(`We love ${students[i]}`);
}

students.forEach((student) => console.log(`We love ${student} !!`));