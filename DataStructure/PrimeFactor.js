

const prompt = require('prompt-sync')();

const n = prompt('Enter a number  '); 

 // A function to print all prime
 // factors of a given number n
 function primeFactors(n)
 {
     // Print the number of 2s that divide n
     while (n % 2 == 0)
     {
         console.log(2 + " ");
         n = Math.floor(n/2);
     }
  
     // n must be odd at this point. So we can skip
     // one element (Note i = i +2)
     for (let i = 3; i <= Math.sqrt(n); i = i + 2)
     {
         // While i divides n, print i and divide n
         while (n % i == 0)
         {
             console.log(i + " ");
             n = Math.floor(n/i);
         }
     }
  
     // This condition is to handle the case when n
     // is a prime number greater than 2
     if (n > 2)
         console.log(n + " ");
 }
     primeFactors(n);
  