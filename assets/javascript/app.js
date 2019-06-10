// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.


// =========== Variables =================

// Create an object variable to store each question along with its possible answers as key:value pairs
// var questionsAnswers = {
//     questionOne: ["On what planet Darth Vader captures Han Solo and Chewbacca In the Empire Strikes Back","Bespin", "Hoth", "Tatooine", "Alderaan"],
//     questionTwo: ["Who cut off Anakin's Arm?", "Obi-Wan Kenobi", "Mace Windu", "Darth Maul", "Count Dooku"],
//     questionThree: ["Which arm of Anakin Skywalker cut off in episode II?", "Right", "Left"],
//     questionFour: ["What was the Force power Darth Vader often used against his own officers?", "Mind Control", "Force Glove", "Force Choke", "Force Lightning"],
//     questionFive: ["What Color was Anakin Skywalker's First Lightsaber?", "Blue", "Purple", "Red", "Green"],
//     questionSix: ["George Lucas talkd that the name Darth Vader means ?", ""],
//     questionSeven: [""],
//     questionEight: [""],
//     questionNine: [""],
//     questionTen: [""],
// };

var questionsAnswers = [
    {question: "On what planet Darth Vader captures Han Solo and Chewbacca In the Empire Strikes Back", answers: ["Bespin", "Hoth", "Tatooine", "Alderaan"], correctAnswer: "Bespin"},
    {question: "Who cut off Anakin's Arm?", answers: ["Obi-Wan Kenobi", "Mace Windu", "Darth Maul", "Count Dooku"], correctAnswer: "Count Dooku"},
    {question: "Which arm of Anakin Skywalker cut off in episode II?", answers: ["Right", "Left"], correctAnswer: "Right"},
    {question: "What was the Force power Darth Vader often used against his own officers?", answers: ["Mind Control", "Force Glove", "Force Choke", "Force Lightning"], correctAnswer: "Force Choke"},
    {question: "What Color was Anakin Skywalker's First Lightsaber?", answers: ["Blue", "Purple", "Red", "Green"], correctAnswer: "Blue"},
    {question: "George Lucas said that the name Darth Vader means?", answers: ["Dark Father", "Dark Lord", "Dark King", "Dark Evil"], correctAnswer: "Dark Father"},
    {question: "At what age did Anakin Skywalker turn to the dark side?", answers: ["25","20","23","22"], correctAnswer: "23"},
    {question: "How many children does Darth Vader have?", answers: ["one","three","four","two"], correctAnswer: "two"},
    {question: "Which actor played Darth Vader in the Original Trilogy ?", answers: ["Peter Mayhew","Alec Guinness","Marlon Brando","David Prowse"], correctAnswer: "David Prowse"},
    {question: "What planet is Anakin Skywalker from?", answers: ["Hot", "Alderaan", "Tatooine", "Endor"], correctAnswer: "Tatooine"},
];
// Create a count that will keep track of time (timer) -- Start at 30 and subtract, once it runs out, score is calculated
var time = 30;
var timerStarted = false;
// number of right questions
var correct = 0;
// number of wrong questions
var wrong = 0;
// number of unanswered questions
var unanswered = 0;
// variables to easily store some HTML elements that will facilitate writing to the document



// ============ Functions ================

// Reset function for player to start over if so desired
// Start function to go to next screen

function count(){

}

function startTimer(){

}

function stopTimer(){

}

function writeToPage(){

}

function questionsScreen(){

}

function scoreScreen(){

}

function displayAnswers(){

}



// ============ Other ====================

// Use onclick/click to trigger next splash screen
// Use .html to overwrite previous screen



// Create a wrapping div in HTML to contain and write/overwrite each subsequent splash screen

// Click function to write HTML code with formulaire once the 'Start' button is pressed

// Start the timer countdown once start is pressed: Count-- per second
    
    // Form calls on the object items and their properties to retrieve and display each question and its corresponding answers
    // While? count > 0 
        // timesUp = true
        // if count > 0
            // timesUp = false ------> every loop while count > 0 to keep the while loop running/avoid going to the next screen (Score)
            // count--;
    // When timesUp = true, go to next screen and calculate right, wrong, and unanswered questions


    $("button").on("click",function(){
        alert(questionsAnswers.questionOne[0]);


    });