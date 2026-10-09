const { createInterface } = require('node:readline/promises');

const rl = createInterface({
    input : process.stdin,
    output : process.stdout
});

const init = async () => {
    const number = await rl.question("Input your score: ");
    const index = convertIndex(number);
    console.log(`The index from score ${number} is ${index}`);
    rl.close();
}

init();

function convertIndex(number) {
    let index;
    if (number >= 90) {
        index = "A";
    }else if (number >=80 ) {
        index = "B";
    }
    else if (number >=70 ) {
        index = "C";
    }
    else if (number >=60 ) {
        index = "D";
    }else{
        index = "E"
    }
    return index;
}