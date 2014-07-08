$(document).on('ready', function() {

$('.submit').click(function() {
	
	var quoteContainer = $('<div></div>')
	
	$('#quote-log').append(quoteContainer)
	quoteContainer.append("<p>Quote: " + $('.quote-input').val() + "</p>").append("<p>Author: " + $('.quote-author').val() + "</p>")
	
	$('.quote-input').val("")
	$('.quote-author').val("")


	// $(this).after('Quote:<input class="quote-input" type="text">Author<input class="quote-author" type="text">')
	// $(this).text('Submit your quote')
	// $(this).removeClass('add-button')
	// $(this).addClass('submit-button')

	})



// $(document).on('click', '.submit-button', function(){
// 	$('#quote-log').append($('.quote-input').val())
// 	// $('.quote-input').removeClass('.quote-input').addClass('.q1')	
// 	$(this).addClass('add-button').removeClass('submit-button')

// })






  
});


