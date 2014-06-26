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


$(document).on('ready', function() {

	// $(document).on('click', function(e){
	// 	var targ = $(eventArgs.target);
	// 	console.log(e);
	// 	if(targ.text() === "Something Cool"){
	// 		console.log('that is so cool')
	// 	}
	// });

	// Delegated event handler for all buttons
	$(document).on('click', 'button', function(){
		// Log the text of the currently clicked item
		console.log( $(this).text() );
	})


});
