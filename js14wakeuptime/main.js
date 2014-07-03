
  
  	var outerShell = $('<div class="outer-shell">');

  	var innerShell = $('<div class="inner-shell">');

  	var pmLabel = $('<div class="pm-label">PM</div>');

  	var autoLabel = $('<div class="auto-label">AUTO</div>');

  	var clockScreen = $('<div class="clock-screen">');

  	var pmIndicator = $('<div class="pm-indicator"></div>');

  	var clockText = $('<div class="clock-text">12:17</div>');

  	var bottomAm = $('<div class="bottom-am"><div class="bottom-am-label">AM</div><div class="stationsAM">53 60 70 90 110 140 170</div></div>');
   	var bottomPm = $('<div class="bottom-pm"><div class="bottom-pm-label">PM</div><div class="stationsPM">88 92 96 102 106 108</div></div>');


   	$('#wrapper').append(outerShell);
   	outerShell.append(innerShell); 
   	
   	innerShell.append(clockScreen);
   	innerShell.append(pmLabel)
   	innerShell.append(autoLabel)
   	innerShell.append(bottomAm)
   	innerShell.append(bottomPm)

   	clockScreen.append(clockText);
   	clockScreen.append(pmIndicator)


$(document).on('ready', function() {


});