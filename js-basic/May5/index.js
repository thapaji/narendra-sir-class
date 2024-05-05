let output = document.getElementById('output');

/******* if statement *******/

const weekend = true;
if (weekend) {
    output.textContent = 'Come to the class';
}

/******* if else statement *******/

const num = 4;
if (num % 2 === 0) {
    output.textContent = 'It is even number';
} else {
    output.textContent = 'It is odd number';
}


/******* if else if statement *******/

const grade = 70;

if (grade >= 90) {
    output.textContent = 'Brilliant !!!!!!!, A+ Grade'
} else if (grade >= 80) {
    output.textContent = 'Excellent !!!!!!!, A Grade';
} else if (grade >= 70) {
    output.textContent = 'Good !!!!!!!, B+ Grade';
} else {
    output.textContent = 'LOL !!!!!!!, You Failed';
}

/******* if else if statement *******/

const item = 'Printer';
let price = 0;

if (item === 'Monitor') {
    price = 200;
} else if (item === 'Mouse') {
    price = 20;
} else if (item === 'Keyboard') {
    price = 30;
} else if (item === 'CPU') {
    price = 400;
} else if (item === 'Printer') {
    price = 80;
}

if (price > 0) {
    output.textContent = 'Price of ' + item + ' is $' + price;
}else{
    output.textContent = 'Item not available';
}