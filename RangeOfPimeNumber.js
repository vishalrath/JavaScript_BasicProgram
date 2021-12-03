const prompt = require('prompt-sync')();

let min = prompt("Enter minimum number in range : ");
min=parseInt(min);
let max = prompt("Enter maximum number in range : ");
max=parseInt(max);

for (i = min; i <= max; i++) 
{
	flag = 1;

	for (j = 2; j <= (i / 2); j++) {
		if ((i % j) == 0)
			flag = 0;
	}
	if (flag == 1)
		console.log("prime number are" + i);
}