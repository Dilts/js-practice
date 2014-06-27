
$(document).on('ready', function() {

 // ________PART ONE________

  $('#section1').on('click', function(){
  	$('body').append(' Cause it is sweet!')
  })

  $('#section2').on('click', function(){
  	$('body').append('<h1>Knowing is half the battle</h1>')
  })

    $('#section3').on('click', function(){
  	$('body').append('<ul><li>Name</li><li>Phone</li><li>Address</li></ul>')
  })

// ____________PART TWO________________

	$('p').on('mouseover', function(){
		$(this).css('color', 'pink');
	})
	$('p').on('mouseout', function(){
		$(this).css('color', 'black');
	})
	$('h3').append('!')


	$('.confirm').on('click', function(e){
		var response = confirm('Are you sure you want to leave this page?');
		console.log(response);
		if(response === false) {
			alert('You will stay on this page');
			e.preventDefault();
			$('.confirm').remove()
		};
	});



	// $('.confirm').confirm({
	// 	text: ' Are you sure you want to leave this page?',
	// 	title: 'Confirmation required',
	// 	confirm: function(button) {

	// 	},
	// 	cancel: function(button) {

	// 	}

	// })
// ____________PART THREE______________

	$('#huge').click(function(){
		$('#huge').before('<div class="pop">Check it out</div>');
	})


	})

