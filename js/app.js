'use strict'; // use strict mode to prevent doing mistakes 

// Ask the user for their name and send a personalized welcome message
var userName= prompt ("Please Enter your name");
alert("Hello " + userName + " Welcome to my Page");

//First Question in the guessing game
var firstQuestion = prompt('Is my name Boshra?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if(firstQuestion.toLowerCase() === 'yes'){
    //console.log("Yes, I am Boshra and I am nice to meet you");
    alert("Yes, I am Boshra and I am nice to meet you");
} else if (firstQuestion.toLowerCase() === 'no'){
    alert("No, My name is Boshra indeed");
}else {
    alert("Error, You didn't type yes or no"); 
}

//Second Question in the guessing game
var secondQuestion = prompt('Am I an engineer?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if(secondQuestion.toLowerCase() === 'yes'){
    //console.log("Yes, I am a Computers Engineer");
    alert("Yes, I am a Computers Engineer");
} else if (secondQuestion.toLowerCase() === 'no'){
    alert("No, you didn't guess it");
}else {
    alert("Error, You didn't type yes or no"); 
}

//Third Question in the guessing game
var thirdQuestion = prompt('Am I From Jordan?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if(thirdQuestion.toLowerCase() === 'yes'){
    //console.log("NO, I am Syrian, but I Love Jordan");
    alert("NO, I am Syrian, but I Love Jordan");
} else if (thirdQuestion.toLowerCase() === 'no'){
    alert("You guess it!");
}else {
    alert("Error, You didn't type yes or no"); 
}

//Forth Question in the guessing game
var forthQuestion = prompt('Do I love Programming?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if(forthQuestion.toLowerCase() === 'yes'){
    //console.log("Yes, I am in love with Codes!");
    alert("Yes, I am in love with Codes!");
} else if (forthQuestion.toLowerCase() === 'no'){
    alert("You didn't guess it!");
}else {
    alert("Error, You didn't type yes or no"); 
}

//Fifth Question in the guessing game
var fifthQuestion = prompt('Do I have previous experience in Software Programming?, Please type Yes or No');

//checking that the user input for the answer either yes or no
if(fifthQuestion.toLowerCase() === 'yes'){
    //console.log("No, This program is my first experience!");
    alert("No, This program is my first experience!");
} else if (fifthQuestion.toLowerCase() === 'no'){
    alert("You guess it!");
}else {
    alert("Error, You didn't type yes or no"); 
}
//Display the user’s name back to them in your final message to the user.
alert("Hope you get to know me "+ userName);

