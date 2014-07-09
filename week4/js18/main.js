$(document).on('ready', function() {


var quoteArray = [];

var Quote = function(quote, author, rating) {
	this.quote = quote;
	this.author = author;
	this.rating = rating;
	quoteArray.push(this);
}
// quote.prototype = new quoteArray();
// quote.prototype.constructor = quote;


var enterQuote = new Quote('Getting to the summit is optional, getting down is mandatory.', 'Ed Visters', 4);
console.log(enterQuote)

});








// _.sortBy( QuoteArray)






























// $(document).on('ready', function() {

// $('.submit').click(function() {
	
// 	var quoteContainer = $('<div></div>')
	
// 	$('#quote-log').append(quoteContainer)
// 	quoteContainer.append("<p>Quote: " + $('.quote-input').val() + "</p>").append("<p>Author: " + $('.quote-author').val() + "</p>")
	
// 	$('.quote-input').val("")
// 	$('.quote-author').val("")


// 	// $(this).after('Quote:<input class="quote-input" type="text">Author<input class="quote-author" type="text">')
// 	// $(this).text('Submit your quote')
// 	// $(this).removeClass('add-button')
// 	// $(this).addClass('submit-button')

// 	})



// // $(document).on('click', '.submit-button', function(){
// // 	$('#quote-log').append($('.quote-input').val())
// // 	// $('.quote-input').removeClass('.quote-input').addClass('.q1')	
// // 	$(this).addClass('add-button').removeClass('submit-button')

// // })

// });


