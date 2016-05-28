var correct=0; 
var incorrect=0; 
var unanswered=0; 
var win=0; 
var timeCounter; 
var timesUp; 
var time =30; //for timer
var questions=[ 
	// {
	// 	question: "How old was Sheldon when he started college?", 
	// 	answers=["13","11","15","7",]  
	// 	triviaImage: url("assets/images/sheldon.jpg"), 
	// 	answer= answers[1],  
	// }; 

	{
		question: "Where is Penny from?", 
		choice1:"Bellevue, Nebraska", 
		choice2:"Fremont, Nebraska",  
		choice3: "Omaha, Nebraska",  
		choice4:"Lincoln, Nebraska",  
		triviaImage: url("assets/images/penny.jpeg"), 
		answer: 3, 

	},   

	{
		question: "How many languages, including Klingon, does Howard claim to speak?",  
		choice1:"4", 
		choice2:"8",  
		choice3: "2", 
		choice4:"6", 
		triviaImage: url("assets/images/howard.jpg"), 
		answer: 4, 
	},   

	{
		question: "What is the correct spelling of Raj's surname?", 
		choice1:"Koothrappalli", 
		choice2:"Koothrapali",
		choice3: "Koothrappali", 
		choice4:"Kothrappali", 
		triviaImage: url("assets/images/raj.jpg"), 
		answer: 3, 
	},  

	{
		question: "Which university do Leonard, Sheldon, Howard and Raj work at?", 
		choice1:"Stanford", 
		choice2:"Caltech",
		choice3: "Berkley", 
		choice4:"UCLA",
		triviaImage: url("assets/images/work.jpg"),
		answer: 2, 
	},   

] 

function timer(){
	time--; 
	$('#timer').html('<h2>Timer: ' + time +'s</h2>'); 
}; 

function gameOver(){
	if(correct ===1) {
		$('correct').html('<h2>You got ' + correct + " Question(s) Right!!</h2>");
	}else{ 
		$('correct').html('<h2>You got ' + correct + " Question(s) Right!</h2>"); 
	}
	if(incorrect ===1) {
		$('incorrect').html('<h2>You got ' + incorrect + " Question(s) Wrong!</h2>");
	}else{ 
		$('incorrect').html('<h2>You got ' + incorrect + " Question(s) Wrong!</h2>"); 
	}; 

	if(unanswered===1){
		$('unanswered').html('<h2>' + unanswered + ' Questions Unanswered</h2>'); 
	}else {
		$('unanswered').html('<h2>' + unanswered + ' Question(s) Unanswered</h2>'); 
	}
	// $('#startGame').
}

function showQuestion(){
	question=Math.floor(Math.random()*questions.length); 
	time=30; 
	nextQuestion(); 
}; 

function nextQuestion(){
	question=Math.floor(Math.random()*questions.length); 
	time=30;  
	if(questions.length==win){
		gameOver(); 
	} else {
		showQuestion(); 
	}

}; 

function timesUp(){
	clearInterval(timesUp); 
	clearInterval(timeCounter); 
	unanswered++; 
}; 


$(document).ready(function(){
	$('#startGame').on('click', function(){
		showQuestion(); 
	});
}); 

