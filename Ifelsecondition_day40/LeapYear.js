
var prompt = require('prompt-sync')();
let year = prompt("Enter date: ");
year =parseInt(year);
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
{
    console.log("the year {0} is leap year", year);

}
else
{
    console.log("the year {0} is not leap year", year);
}