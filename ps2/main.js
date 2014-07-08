$(document).on('ready', function() {
  
});


// ___________REVERSE____________

var str = "Hello how are you today";
var str2 = "No way";

 function firstReverse(input) {
 	return input.split('').reverse().join('');
 };

console.log(firstReverse(str));
firstReverse(str2);

// _____________CAPITALIZE____________



function swapCase(input) {

	// var firstStep = input.toUpperCase().split(' ');
	// return firstStep.charAt(0).toLowerCase();
	


	return input.toUpperCase().split(' ')


};
console.log(swapCase(str));