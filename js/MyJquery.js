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
	var guess = [];
	var solution = [];
	/*Assign colors to colorButtons*/
	var colors = ["red","blue","yellow","green","purple","orange"];
	$('.colorButton').each(function(){
		$(this).css(eval(colors[i]));
		i++;
	})/*End Assign colors to colorButtons*/
	/*Define a solution, random color push to solution array*/
	for(i = 0; i < 4; i++) {
     solution.push(colors[Math.floor(Math.random()*colors.length)]);
	}
	//Check solution
	alert(solution);
	//check colorButton

	//Color button
	$('.colorButton').click(function(){
		$('.colorSection:nth-child('+ rowCounter +') > .colors:nth-child(' + colorCounter + ')')
		.css("background-color",$(this).css("background-color"));
		colorCounter++;
		if (colorCounter==5) {$('#submit').removeAttr('disabled');};
	});//End color button click

	$('#submit').click(function(){
		//History row color here
		$('.colorSection:nth-child('+ rowCounter +')').css("background-color","#543A55");
		$('.colorSection:nth-child('+ (rowCounter+1) +')').css("background-color","#00FF00");
		//iterate ColorSections and reset colors
		$('#submit').attr('disabled','disabled');
		rowCheck(rowCounter);
		rowCounter++;
		colorCounter=1;
	});

	$('#clear').click(function(){
		$('.colorSection:nth-child('+ rowCounter +') > .colors')
		.css("background-color","#000000");
		colorCounter=1;
	});
	var rowCheck = function (thisRow){
		guess = [];
		guess.push(colorCheck($('.colorSection:nth-child('+ thisRow +') > .colors:nth-child(1)').css("background-color")));
		guess.push(colorCheck($('.colorSection:nth-child('+ thisRow +') > .colors:nth-child(2)').css("background-color")));
		guess.push(colorCheck($('.colorSection:nth-child('+ thisRow +') > .colors:nth-child(3)').css("background-color")));
		guess.push(colorCheck($('.colorSection:nth-child('+ thisRow +') > .colors:nth-child(4)').css("background-color")));
		alert(guess);
		compareArrays(guess,solution);
	};
	var colorCheck = function (thisColor){
		if(thisColor == 'rgb(255, 0, 0)') return "red";
		if(thisColor == 'rgb(0, 0, 255)') return "blue";
		if(thisColor == 'rgb(255, 255, 0)') return "yellow";
		if(thisColor == 'rgb(0, 128, 0)') return "green";
		if(thisColor == 'rgb(128, 0, 128)') return "purple";
		if(thisColor == 'rgb(255, 69, 0)') return "orange";
	};

	var compareArrays = function (arr1, arr2){
		if (arr1[0]==arr2[0] && arr1[1]==arr2[1] && arr1[2]==arr2[2] && arr1[3]==arr2[3]){
			alert("winner");
		}
	}



});//End document.ready

  //alert($(this).css("background-color"));
		//Object literal pattern
		/*	
		$.each(eval(colors[i]), function(key, value) {
    	alert(this, eval(colors[i])[value]);
		});*/