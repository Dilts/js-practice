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

	return input.split('').toUpperCase();
};
console.log(swapCase(str));