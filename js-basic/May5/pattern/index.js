/*************   Pattern Printing  *****************/


let output = document.getElementById('output');
const output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');


for (let i = 0; i <= 5; i++) {
    let str = '';
    let j = 0;
    for (let j = 0; j < i; j++) {
        str += '*';
        output.innerHTML = output.innerHTML + '*';
    }
    output.innerHTML = output.innerHTML + '<br/>'
    console.log(str);
}

console.log('----------------------------')


for (let i = 5; i > 0; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '*';
        output2.innerHTML = output2.innerHTML + '*';
    }
    output2.innerHTML = output2.innerHTML + '<br/>';
    console.log(str);
}

console.log('----------------------------')

for (let i = 0; i <= 5; i++) {

    let str = '';
    for (let k = 5; k > 0; k -= 2) {
        str += ' ';
        output3.innerHTML = output3.innerHTML + '&nbsp;';
    }
    let j = 0;
    for (let j = 0; j < i; j++) {
        str += '*';
        output3.innerHTML = output3.innerHTML + '*';
    }
    output3.innerHTML = output3.innerHTML + '<br/>';
    console.log(str);
}

console.log('----------------------------')


for (let i = 5; i > 0; i--) {
    let str = '';
    for (let k = 5; k > 0; k -= 2) {
        str += ' ';
        output4.innerHTML = output4.innerHTML + '&nbsp;';
    }
    for (let j = 0; j < i; j++) {
        str += '*';
        output4.innerHTML = output4.innerHTML + '*';
    }
    output4.innerHTML = output4.innerHTML + '<br/>';
    console.log(str);
}
