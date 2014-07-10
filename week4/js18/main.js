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





$('.submit').click(function() {
	
	var quoteContainer = $('<div></div>')
	
	$('#quote-log').append(quoteContainer)
	quoteContainer.append("<p>Quote: " + $('.quote-input').val() + "</p>").append("<p>Author: " + $('.quote-author').val() + "</p>")
	
	$('.quote-input').val("")
	$('.quote-author').val("")


	})
		$(function()
		{
			/*
				Basic Example with custom image path
				path : indicate custom path to the star image
			*/
			$('#star').raty({ path: 'http://wbotelhos.com/raty/lib/img/' });
			
			
			/*
				Predefined score with half star,
				score : You can pass any value for it, not necessarily,
						a data- value.
						You can use a rating-score too.
						but then 
						code will be return $(this).attr('rating-score');
				half 	: that will enable user to add half star rating
				target  : define the rating hint container
				targetKeep : this will allow used to
					keep selected result inside hint container
					defining false will loose selected value
			*/

			$('#predefined-star').raty(
			{
				path: 'http://wbotelhos.com/raty/lib/img/',
				half: true,
				target: '#result',
				targetKeep: true,
				score: function()
				{
					return $(this).attr('data-score');
				}
			});
		});

});

// _.sortBy( QuoteArray, function (item)) {
// 		return item.rating
// }






























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


