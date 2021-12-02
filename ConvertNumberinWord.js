var prompt = require('prompt-sync')();
let N = prompt("Enter number: ");
// Function to return the word
     function printValue(digit) {
        // each digit c
        switch (digit)
         {
          case "0":
            document.write("Zero ");
            break;
 
          case "1":
            document.write("One ");
            break;
 
          case "2":
            document.write("Two ");
            break;
 
          case "3":
            document.write("Three ");
            break;
 
          case "4":
            document.write("Four ");
            break;
 
          case "5":
            document.write("Five ");
            break;
 
          case "6":
            document.write("Six ");
            break;

          case "7":
            document.write("Seven ");
            break;
 
          case "8":
            document.write("Eight ");
            break;
 
          case "9":
            document.write("Nine ");
            break;
        }
      }
 
      // Function to iterate through every
      // digit in the given number
      function printWord(N) {
        var i,
          length = N.length;
 
        // Finding each digit of the number
        for (i = 0; i < length; i++) {
          // Print the digit in words
          printValue(N[i]);
        }
      }
 
      // Driver code
      //var N = "123";
     // printWord(N);
       
