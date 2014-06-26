
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
		$('p').css('background-color', 'red');
	})
	$('p').on('mouseout', function(){
		$('p').css('background-color', 'white');
	})

});

