var prompt = require('prompt-sync')();
let a = prompt("Enter value of a: ");
a=parseInt(a);
let b = prompt("Enter value of b: ");
b=parseInt(b);
let c = prompt("Enter value of c: ");
c=parseInt(c);
// Assign values to x and y
//let a;
//let b ;
//let c;
// Add x and y and assign the sum to z
let Result = a+ b*c;

console.log(Result);
//Second operation
let Result2= a%b+c;
console.log(Result);
//third operation
let Result3= c+a/b;
console.log(Result3);
//Fourth operation
let Result4= a*b+c;
console.log(Result4);

// if(Result>Result2 && Result>Result3 && Result>Result4)
// {
//     console.log("maximun",Result);
    
// }
// else if( Reult2>Result && Result2> Result3 && Result2> Result4);
// {
//     console.log("maximun",Result2);

// }
// // else if( Reult3>Result && Result3> Result2 && Result3> Result4);
// // {
// //     console.log("maximun",Result3);

// // }