var prompt = require('prompt-sync')();
let Number = prompt('Enter number: ');
Number=parseInt(Number);
let sum = 0;

//calculate sum of series
for (i = 1; i <= Number; i++) 
{
    sum += 1 / i;
}
console.log("Harmonic Value for the series is: " + sum);