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
// // 	return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor' ];
// // };

// var AppFucntion = (function() {
// 	var name = 'RefactoU';
// 	var getData = function() {
// 		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor' ];
// };

// 	return {
// 		'getData': getData,
// 		'welcome': welcome
// 	}
	

// })();

// // var App = AppFunction();

// ________________________________Weekk 4_____________

// var Person = function(name, age) {
// 	this.name = name;
// 	this.age = age;
// }



// var Athlete = function(name, age, fatigue, height, weight) {
// 	this.fatigue = fatigue;
// 	this.height = height;
// 	this.weight = weight;
// 	this.warmUp = function() {
// 		console.log('Do your stretches');
// 	Person.call(this, name, age);
// 	}
// };
// Athlete.prototype = new Person();
// Athlete.prototype.constructor = Athlete;



// var Swimmer = function(name, age, fatigue, height, weight, breath) {
// 	this.breath = brea
// 	Athlete.call(this, fatigue, height, weight);

// };
// Swimmer.prototype = new Athlete(); 
// Swimmer.prototype.constructor = Swimmer;



// var RollerBlader = function(name, age, fatigue, height, weight, isWearingHelmet, skateType) {
// 	this.isWearingHelmet = isWearingHelmet;
// 	this.skateType = skateType;

// 	Athlete.call(this, fatigue, height, weight);
// };
// RollerBlader.prototype = new Athlete();
// RollerBlader.prototype.constructor = RollerBlader;





// var Rider1 = new RollerBlader('bob', 23, 100, 60, 160, true, 'Chocolate')
// console.log(Rider1)


// ____________________________PS#_____________________________________
// 
// 
// 
var str = 'racecar'

function palindrome(input) {
	var reversed = input.split('').reverse().join('');

	if (reversed === input) {
		console.log('This is a palindrome')
	}
	else {
		console.log('This is not!')
	}
	
}
console.log(palindrome(str));
