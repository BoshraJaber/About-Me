'use strict'; // use strict mode to prevent doing mistakes

// Ask the user for their name and send a personalized welcome message
var userName = prompt("Please Enter your name");
alert("Hello " + userName + " Welcome to my Page");
var counterCorrect = 0;


function correctAnswers() {
    console.log("Correct");
    alert("you are right");
    counterCorrect++;
}

function notCorrectAnswer() {
    alert("not Correct");
}

function inputError() {
    alert("Error with your inputs");
}

function mainFuction(userInput) {
    if (userInput.toLowerCase() === 'yes') {
        //console.log("Yes, I am Boshra and I am nice to meet you");
        correctAnswers();
    } else if (userInput.toLowerCase() === 'no') {
        notCorrectAnswer();
    } else {
        inputError();
    }
}
function enterNumber() {
    for (var i = 0; i < 4; i++) {
        var sixthQuestion = prompt("Can you guess my height?, Hint: I am not tall :)");
        console.log(sixthQuestion);
        if (sixthQuestion === '150') {
            correctAnswers();
            i = 3;
        } else if (sixthQuestion < 150) {
            alert("too low! Come on! I am not that short");
        } else {
            alert("too high!");
        }
    }
}

function geuss() {
    var correctAnswer = ['HTML', 'CSS', 'C'];
    for (var i = 0; i < 6; i++) {
        var userAnswer = prompt("Can you guess one of my favorite languages in software programming?")
        console.log(userAnswer);
        if (userAnswer.toUpperCase() === correctAnswer[0] || userAnswer.toUpperCase() === correctAnswer[1] || userAnswer.toUpperCase() === correctAnswer[2]) {
            correctAnswers();
            i = 6;
        } else {
            alert("Not Correct! try again!");
        }
    }
    alert("My favorite languages are:" + correctAnswer);

}


// //First Question
var firstQuestion = prompt('Is my name Boshra?, Please type Yes or No');
mainFuction(firstQuestion);



// //Second Question
var secoundQuestion = prompt('Am i an engineer?, Please type Yes or No');
mainFuction(secoundQuestion);


// //Third Question

var thirdQuestion = prompt('Am i from SYRIA?, Please type Yes or No');
mainFuction(thirdQuestion);

// //Forth Question
var forthQuestion = prompt('Do I love Programming?, Please type Yes or No');
mainFuction(forthQuestion);

//Fifth Question
var fifthQuestion = prompt('Do I have previous experience in Software Programming?, Please type Yes or No');
mainFuction(fifthQuestion);
alert("Hope you get to know me " + userName);

// // Sixth Question:


enterNumber();
// // Seventh Question:

geuss();




alert("you have guessed " + counterCorrect + " of my questions " + userName);