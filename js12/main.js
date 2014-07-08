// $(document).on('ready', function() {
  
// });



// var snake = {
// 	deadskin: 100,

// 	molt: function () {

// 	}
// };


// var snake = {
// 	deadskin: 100,

// 	molt: function () {
// 		var original = this.deadskin;
//         this.deadskin = 0;
//         return original;
// 	}
// };




// var snake = {
// 	deadskin: 100,

// 	molt: function () {
// 		var original = this.deadskin;
//         this.deadskin = 0;
//         return original;
// 	}
// };


// // 
// var student = function() {
// 	this.school = 'RefactorU';
// }


var Athlete = function(fatigue, height, weight) {
	this.fatigue = fatigue;
	this.height = height;
	this.weight = weight;
	this.warmUp = function() {
		console.log('Do your stretches');
	}
};

var Swimmer = function(fatigue, height, weight, breath) {
	this.breath = breath;
	Athlete.call(this, fatigue, height, weight);

}

var RollerBlader = function(fatigue, height, weight, isWearingHelmet, skateType) {
	this.isWearingHelmet = isWearingHelmet;
	this.skateType = skateType;

	Athlete.call(this, fatigue, height, weight);
}


Swimmer.prototype = new Athlete(); 
RollerBlader.prototype = new Athlete();

Swimmer.prototype.constructor = Swimmer;
RollerBlader.prototype.constructor = RollerBlader;


var Rider1 = new RollerBlader(true, 60, 160, true, 'Chocolate')
console.log(Rider1)


