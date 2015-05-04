  $(document).ready(function () {
  	var red = {'background-color': 'rgb(255, 0, 0)'};
	var blue = {'background-color': 'rgb(0, 0, 255)'};
	var yellow = {'background-color': 'rgb(255, 255, 0)'};
	var green = {'background-color': 'rgb(0, 128, 0)'};
	var purple = {'background-color': 'rgb(128, 0, 128)'};
	var orange = {'background-color': 'rgb(255, 165, 0)'};

	var i=0;
	var colorCounter = 1;
	var rowCounter = 1;
	var guess = [];
	var solution = [];
	var verdit = [];
	var tempSolution = [];

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
	$('.colorSection:nth-child('+ rowCounter +')').css("background-color","#39B544");
	//Reset button
	$('#reset').click(function(){
		location.reload();
	});
	//Color button
	$('.colorButton').click(function(){
		$('.colorSection:nth-child('+ rowCounter +') > .colors:nth-child(' + colorCounter + ')')
		.css("background-color",$(this).css("background-color"));
		colorCounter++;
		if (colorCounter==5) {
			$('#submit').removeAttr('disabled');
			$('#submit').addClass('activeButton');
		};
	});//End color button click

	$('#submit').click(function(){
		//History row color here
		$('.colorSection:nth-child('+ rowCounter +')').css("background-color","#899797");
		$('.colorSection:nth-child('+ (rowCounter+1) +')').css("background-color","#39B544");
		//iterate ColorSections and reset colors
		$('#submit').attr('disabled','disabled');
		$('#submit').removeClass('activeButton');
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
		//alert(guess);
		//alert(jQuery.inArray("red", guess));
		compareArrays(guess,solution);
	};
	var colorCheck = function (thisColor){
		if(thisColor == 'rgb(255, 0, 0)') return "red";
		if(thisColor == 'rgb(0, 0, 255)') return "blue";
		if(thisColor == 'rgb(255, 255, 0)') return "yellow";
		if(thisColor == 'rgb(0, 128, 0)') return "green";
		if(thisColor == 'rgb(128, 0, 128)') return "purple";
		if(thisColor == 'rgb(255, 165, 0)') return "orange";
	};

	var compareArrays = function (arr1, arr2){ //(guess, solution)
		verdit = [];
		tempSolution = [];
		tempSolution = arr2.slice();
		//I used this instead of switch case because it sorts the verdict array
		//Search for a specified value within an array and return its index (or -1 if not found).
		//0 = First, lenght-1 = last

		/* Scoring
		2- good location, good color
		1- wrong location, good color
		0- wrong location, wrong color
		*/
		if (arr1[0]==arr2[0] && arr1[1]==arr2[1] && arr1[2]==arr2[2] && arr1[3]==arr2[3]){
			revealSolution();
			$('#clea').removeClass('activeButton');
		}
		for(i = 0; i < 4; i++) {
			if	(jQuery.inArray(arr1[i],tempSolution)==i){
				verdit.push(2);
				tempSolution[i] = "checked";
			}
			else if	(tempSolution[jQuery.inArray(arr1[i],tempSolution)]!="checked" && jQuery.inArray(arr1[i],tempSolution)!=-1 && jQuery.inArray(arr1[i],tempSolution)!=i) {
				verdit.push(1);
				tempSolution[jQuery.inArray(arr1[i],tempSolution)] = "checked";
			}

			else if	(tempSolution[jQuery.inArray(arr1[i],tempSolution)]!="checked" && jQuery.inArray(arr1[i],tempSolution)==-1){
				verdit.push(0);
			}
		}
			verdit.sort(function(a, b){return b-a});
			fillColorButton(verdit);
		}

	var fillColorButton = function (verdit) {
		for(i = 0; i < 4; i++) {
		$(".resultColorRow:nth-child(" + rowCounter +") .resultColor:eq(" + i +")")
		.css("background-color", getColorButton(verdit[i]));
		}
	}

	var getColorButton = function (tempNum){
	switch(tempNum) {
    case 2:
        return "white";
        break;
    case 1:
        return "#FF0000";
        break;
    default:
        return "black";
}
	}
var revealSolution = function(){
		for(i = 0; i < 4; i++) {
		$(".finalSolutionColorSection .colors:eq(" + i +")")
		.css("background-color", solution[i]).text("");
		}
	}



});
