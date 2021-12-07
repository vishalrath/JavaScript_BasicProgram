var prompt = require('prompt-sync')();
let Number = prompt('Enter number: ');
Number=parseInt(Number);
for (i = 0; i <= Number; i++) 
{
    let powerOfTwo = Math.pow(2, i)
    console.log(powerOfTwo);
}