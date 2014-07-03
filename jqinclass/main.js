// // $(document).on('ready', function() {
  
// // });


// // var welcome = $('#welcome-message');
// // welcome.css('font-size', '72px');

// // Thursday- Event handling
// var counter = 0;

// $(document).on('ready', function() {
// 	console.log('hello world from on ready');

// 	$('button').on('click', function(){
// 		console.log('hello from button click',counter);
// 		counter++;

// 	})


// 	console.log(this);

// 	$(this).css


// 		// This is the normal style for attaching a listener/handler
// 	// $('#my-button').on('click', function(){
// 	// $('#my-button').click(function(eventArgs){	
// 	// 	console.log(eventArgs)

// 	// $('a').on('click', function(e) {
// 	// 	console.log('clicked on an anchor tag');
// 	// 	e.preventDefault();
// 	// })


// 	})
// })	



// _______________PART TWO_____________


// $(document).on('ready', function() {

// 	// $(document).on('click', function(e){
// 	// 	var targ = $(eventArgs.target);
// 	// 	console.log(e);
// 	// 	if(targ.text() === "Something Cool"){
// 	// 		console.log('that is so cool')
// 	// 	}
// 	// });

// 	// Delegated event handler for all buttons
// 	$(document).on('click', 'button', function(){
// 		// Log the text of the currently clicked item
// 		console.log( $(this).text() );
// 	})


// });



// _____________Friday In Class_________________

// $(document).on('ready', function() {
//   $('li').on('click', function(){

//   })
// });

// 

// ___________________Monday in Classs______________________
// 	var time = [];

// var stopwatch = function(hours, minutes, seconds) {
// 	time.push({
// 		'hours': hours,
// 		'minutes': minutes,
// 		'seconds': seconds
// 	});


// 	if(hours === undefined) {
// 		hours = 0;
// 	}
// 	if(minutes === undefined) {
// 		minutes = 0;
// 	}
// 	if(seconds === undefined) {
// 		seconds = 0;
// 	}
// 	console.log(hours, minutes, seconds);
// 	return time;
// }

// stopwatch(3, 6);


// ____________Tuesday________________

var gamesList =[];

gamesList.push({
	title:"Braid",
	description: "Kinda like mario"
})

gamesList.push({
	title:"DK",
	description: "Kinda like mario but with a monkey!"
})

console.log(gamesList)


// Utility Functions

var renderList = function(){
	// Empty items from view
	$('games-list').empty();

	// Loop through and render each game
	for (car i=0, i <gamesList.length; i++

}









