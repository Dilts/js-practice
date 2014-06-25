
$(document).on('ready', function() {
  
});



var input = '<input type="text">'


var size = $('#p1').outerHeight(true)
var size2 = $('#p1').outerHeight(false)

var size3 = $('#p2').outerHeight(true)
var size4 = $('#p2').outerHeight(false)

var size5 = $('#p3').outerHeight(true)
var size6 = $('#p3').outerHeight(false)



$('#p1').click(function() {
	$('#p1').hide()
	$('#p1').before(input)
	$('#para').height(size2)
	$('#para').css('margin', (size - size2)/2)
	input.val($('#p1').text());})

$('#p2').click(function() {
	$('#p2').hide()
	$('#p2').before(input)
	$('#para2').height(size4)
	$('#para2').css('margin', (size3 - size4)/2)
	input.val($('#p1').text());})

$('#p3').click(function() {
	$('#p3').hide()
	$('#p3').before(input)
	$('#para3').height(size6)
	$('#para3').css('margin', (size5 - size6)/2)
	input.val($('#p1').text());})


