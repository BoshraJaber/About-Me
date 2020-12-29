'use strict'; // use strict mode to prevent doing mistakes

// Ask the user for their name and send a personalized welcome message
var userName = prompt("Please Enter your name");
alert("Hello " + userName + " Welcome to my Page");
var counterCorrect = 0;

//First Question
var firstQuestion = prompt('Is my name Boshra?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if (firstQuestion.toLowerCase() === 'yes') {
    //console.log("Yes, I am Boshra and I am nice to meet you");
    alert("Yes, I am Boshra and I am nice to meet you");
    counterCorrect++;
} else if (firstQuestion.toLowerCase() === 'no') {
    alert("No, My name is Boshra indeed");
} else {
    alert("Error, You didn't type yes or no");
}

//Second Question
var secondQuestion = prompt('Am I an engineer?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if (secondQuestion.toLowerCase() === 'yes') {
    console.log("Yes, I am a Computers Engineer");
    alert("Yes, I am a Computers Engineer");
    counterCorrect++;
} else if (secondQuestion.toLowerCase() === 'no') {
    alert("No, you didn't guess it");
} else {
    alert("Error, You didn't type yes or no");
}

//Third Question
var thirdQuestion = prompt('Am I From Jordan?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if (thirdQuestion.toLowerCase() === 'yes') {
    //console.log("NO, I am Syrian, but I Love Jordan");
    alert("NO, I am Syrian, but I Love Jordan");
} else if (thirdQuestion.toLowerCase() === 'no') {
    alert("You guess it!");
    counterCorrect++;
} else {
    alert("Error, You didn't type yes or no");
}

//Forth Question
var forthQuestion = prompt('Do I love Programming?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if (forthQuestion.toLowerCase() === 'yes') {
    //console.log("Yes, I am in love with Codes!");
    alert("Yes, I am in love with Codes!");
    counterCorrect++;
} else if (forthQuestion.toLowerCase() === 'no') {
    alert("You didn't guess it!");
} else {
    alert("Error, You didn't type yes or no");
}

//Fifth Question
var fifthQuestion = prompt('Do I have previous experience in Software Programming?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if (fifthQuestion.toLowerCase() === 'yes') {
    //console.log("No, This program is my first experience!");
    alert("No, This program is my first experience!");
} else if (fifthQuestion.toLowerCase() === 'no') {
    alert("You guess it!");
    counterCorrect++;
} else {
    alert("Error, You didn't type yes or no");
}
//Display the user’s name back to them in your final message to the user.
alert("Hope you get to know me " + userName);

// Sixth Question:
for (var i = 0; i < 4; i++) {
    var sixthQuestion = prompt("Can you guess my height?, Hint: I am not tall :)");
    console.log(sixthQuestion);
    if (sixthQuestion === '150') {
        alert("That is Correct");
        counterCorrect++;
        i = 3;
    } else if (sixthQuestion < 150) {
        alert("too low! Come on! I am not that short");
    } else {
        alert("too high!");
    }
}
if (sixthQuestion !== '150') {
    alert("My height is 150! Better Luck next time!");
}

// Seventh Question:
var correctAnswers = ['HTML', 'CSS', 'C'];

for (var i = 0; i <6 ; i++) {
    var userAnswer = prompt("Can you guess one of my favorite languages in software programming?")
    console.log(userAnswer);
    if (userAnswer.toUpperCase() === correctAnswers[0] || userAnswer.toUpperCase() === correctAnswers[1] || userAnswer.toUpperCase() === correctAnswers[2]) {
        alert('Correct!');
        counterCorrect++;
        i = 6;
    } else {
        alert("Not Correct! try again!");
    }
}
alert("My favorite languages are:" + correctAnswers);
alert("you have guessed " + counterCorrect + " of my questions " + userName);