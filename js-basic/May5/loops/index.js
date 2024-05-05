let output = document.getElementById('output');
const output2 = document.getElementById('output2');

/***** FOR Loop  *****/
/** initializer **/
/** terminator **/
for (let i = 0; i <= 10; i++) {
    // i = i+1;  increamenter
    console.log(i);
}

/***** While Loop  *****/

let i = 0;
while (i < 5) {
    console.log(i)
    i++;
}

/***** Do While Loop  *****/

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 5);

/***** For in Loop  Object iterable *****/

const syam = {
    name: 'Syam',
    age: 25,
    address: 'Sydney'
}

for (let key in syam) {
    console.log(key, syam[key]);
}


/***** For of Loop  Object iterable *****/

let groceryList = ['Apple', 'Milk', 'Chicken']

for (let groceryItem of groceryList) {
    console.log(groceryItem)
}

let name = 'SUJAN';
for (let char of name) {
    console.log(char)
}