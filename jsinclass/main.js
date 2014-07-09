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
// 
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
// var str = 'racecar'

// function palindrome(input) {
// 	var reversed = input.split('').reverse().join('');

// 	if (reversed === input) {
// 		console.log('This is a palindrome')
// 	}
// 	else {
// 		console.log('This is not!')
// 	}
	
// }
// console.log(palindrome(str));


// _________________PROTO PRACTICE________________

var FuelStation = function () {

};

FuelStation.prototype.refueling = function(truck) {
	truck.fuel = 100;
}


var Truck = function(color) {
	if(color) {
		this.color = color;
	}
	this.iconType = 'truck';
    this.fuel = 100;

// this.create = function(){
// 	var el = $('<i>')
// 	.addClass('icon-' + this.iconType)
// 	.css('color', this.color);
// 		return el;
// 	};

};

Truck.prototype.color = 'blue';
// Truck.prototype.constructor = Truck;

Truck.prototype.create = function(){
	 this.el = $('<i>')
	.addClass('icon-' + this.iconType)
	.css('color', this.color);
		
		return this.el;
	};
Truck.prototype.updateColor = function() {
	this.el.css('color', this.color);
}

Truck.prototype.drive = function() {
	this.fuel -= 10; 
}



var Ambulance = function() {
	this.iconType = 'ambulance'
};

Ambulance.prototype = new Truck('red');
Ambulance.prototype.constructor = Ambulance;



var burritoBus = new Truck();
// console.log(burritoTruck.fuel);
$('body').append(burritoBus.create());
// console.log(burritoTruck.fuel);



var tofurkeyBus = new Truck();
$('body').append(tofurkeyBus.create());

var ambulance = new Ambulance();
$('body').append(ambulance.create());


var hess = new FuelStation();
var conoco = new FuelStation();


// Called hess.refueling(burritoBus)  in console to refuel the Truck
