// Code your solutions in this file
function writeCards(names,eventName){
    let newArray = [];
    for (let count = 0; count < names.length; count++) {
        let message = `Thank you, ${names[count]}, for the wonderful surprise gift!`;
        newArray.push(message);
    }
    return newArray;
}

function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
}