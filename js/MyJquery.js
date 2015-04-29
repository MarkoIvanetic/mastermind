  $(document).ready(function () {
  	var red = {'background-color': 'rgb(255,0,0)'};
	var blue = {'background-color': '#0000FF'};
	var yellow = {'background-color': '#FFFF00'};
	var green = {'background-color': '#008000'};
	var purple = {'background-color': '#800080'};
	var orange = {'background-color': '#FF4500'};
	/*var lightBlue = {'background-color': '#5D9BC7'};*/

	var i=0;
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
		alert($(this).css("background-color"));
		$.each(red, function(key, value) {
    	alert(this, red[value]);
		});
	})



});//End document.ready