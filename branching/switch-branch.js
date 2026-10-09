function convertIndex(number) {
    let index;
    switch (number) {
        case 90:
            index = "A";
        break;

        case 80:
            index = "B";
        break;

        case 70:
            index = "C";
        break;

        case 60:
            index = "D";
        break;

        default:
            index = "E";
        
        return index;
    }
}
const number = 87;
const index = convertIndex(number);
console.log(`The index from score ${number} is ${index}`);