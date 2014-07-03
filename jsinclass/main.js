// var square = function(x) {
// 	return x * x;
// };

// var result = square(3);
// alert(result);

// var log = function(i) {
// 	return i / i 
// }

// var result = square(3);
// alert(result);
// _____________________________________


// Globals

// var name = 'RefactoU';


// var getData = function() {
// 	return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor' ];
// };


// ________TECHNIQUE 1: NameSpacing____________
// 
// 
// Make your variables part of an object

// var App = {
// // var name = 'RefactoU'; change to a value pair
// 	name: 'RefactoU',
// 	getData: function() {
// 		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
// 	}
// };


// ________________TECHNIQUE #2 Revealing Module Pattern______
// var getData = function() {
// 	return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor' ];
// };

var AppFucntion = (function() {
	var name = 'RefactoU';
	var getData = function() {
		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor' ];
};

	return {
		'getData': getData,
		'welcome': welcome
	}
	

})();

// var App = AppFunction();

