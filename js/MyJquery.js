  $(document).ready(function () {
  	var red = {'background-color': 'rgb(255, 0, 0)'};
	var blue = {'background-color': 'rgb(0, 0, 255)'};
	var yellow = {'background-color': 'rgb(255, 255, 0)'};
	var green = {'background-color': 'rgb(0, 128, 0)'};
	var purple = {'background-color': 'rgb(128, 0, 128)'};
	var orange = {'background-color': 'rgb(255, 69, 0)'};
	/*var lightBlue = {'background-color': '#5D9BC7'};*/

	var i=0;
	var colorCounter = 1;
	var rowCounter = 1;
	/*Assign colors to colorButtons*/
	var colors = ["red","blue","yellow","green","purple","orange"];
	$('.colorButton').each(function(){
		$(this).css(eval(colors[i]));
		i++;
	})/*End Assign colors to colorButtons*/
	/*Define a solution, random color push to solution array*/
	var solution = [];
	for(i = 0; i < 4; i++) {
     solution.push(colors[Math.floor(Math.random()*colors.length)]);
	}
	//Check solution
	alert(solution);
	//check colorButton
	$('.colorButton').click(function(){
		//alert($(this).css("background-color"));
		//Object literal pattern
		/*	
		$.each(eval(colors[i]), function(key, value) {
    	alert(this, eval(colors[i])[value]);
		});*/
		$('.colorSection:nth-child('+ rowCounter +') > .colors:nth-child(' + colorCounter + ')').css("background-color",$(this).css("background-color"));
		colorCounter++;
	});//End color button click
	$('#submit').click(function(){
		//iterate ColorSections and reset colors
		rowCounter++;
		colorCounter=0;
		//alert(rowCounter);
	});



});//End document.ready