// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 


// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.


// =========== Variables =================

var questionsAnswers = [
    {
        questionNumber: "q1",
        question: "On what planet Darth Vader captures Han Solo and Chewbacca In the Empire Strikes Back",
        answers: ["Bespin", "Hoth", "Tatooine", "Alderaan"],
        correctAnswer: "Bespin"
    },

    {
        questionNumber: "q2",
        question: "Who cut off Anakin's Arm?",
        answers: ["Obi-Wan Kenobi", "Mace Windu", "Darth Maul", "Count Dooku"],
        correctAnswer: "Count Dooku"
    },

    {
        questionNumber: "q3",
        question: "Which of Anakin Skywalker's arm was cut off in episode II?",
        answers: ["Right", "Left"],
        correctAnswer: "Right"
    },

    {
        questionNumber: "q4",
        question: "What was the Force power Darth Vader often used against his own officers?",
        answers: ["Mind Control", "Force Glove", "Force Choke", "Force Lightning"],
        correctAnswer: "Force Choke"
    },

    {
        questionNumber: "q5",
        question: "What Color was Anakin Skywalker's First Lightsaber?",
        answers: ["Blue", "Purple", "Red", "Green"],
        correctAnswer: "Blue"
    },

    {
        questionNumber: "q6",
        question: "George Lucas said that the name Darth Vader means?",
        answers: ["Dark Father", "Dark Lord", "Dark King", "Dark Evil"],
        correctAnswer: "Dark Father"
    },

    {
        questionNumber: "q7",
        question: "At what age did Anakin Skywalker turn to the dark side?",
        answers: ["25", "20", "23", "22"],
        correctAnswer: "23"
    },

    {
        questionNumber: "q8",
        question: "How many children does Darth Vader have?",
        answers: ["one", "three", "four", "two"],
        correctAnswer: "two"
    },

    {
        questionNumber: "q9",
        question: "Which actor played Darth Vader in the Original Trilogy?",
        answers: ["Peter Mayhew", "Alec Guinness", "Marlon Brando", "David Prowse"],
        correctAnswer: "David Prowse"
    },

    {
        questionNumber: "q10",
        question: "What planet is Anakin Skywalker from?",
        answers: ["Hot", "Alderaan", "Tatooine", "Endor"],
        correctAnswer: "Tatooine"
    },
];
// Create a count that will keep track of time (timer) -- Start at 30 and subtract, once it runs out, score is calculated
var time = 60;
var timerStarted = false;
var intervalId;
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

function count() {

    if (timerStarted) {
        time--;
    }

    var displayTimer = timeConverter(time);

    $("#display-timer").text(displayTimer);
}

function startTimer() {
    if (!timerStarted) {
        intervalId = setInterval(count, 1000);
        timerStarted = true;
    }
}

function stopTimer() {
    if (timerStarted && time === 0) {
        clearInterval(intervalId);
        timerStarted = false;
    }
}

function writeToPage(toWrite) {
    $("#overwrite").html(toWrite);
}

function questionsScreen() {
    startTimer();
    var questionSection = $("<div>").attr({
        class: "form",
        id: "question-section"
    })
    var displayTime = $("<div>").attr("id", "display-timer");

    questionSection.append(displayTime);
    for (var i = 0; i < questionsAnswers.length; i++) {
        var q = $("<div>").addClass("question").attr("data-value", questionsAnswers[i].questionNumber).html("<p>" + questionsAnswers[i].question + "</p>");
        var ans = questionsAnswers[i].answers;

        // for (var j = 0; j < ans.length; j++) {
        //     var a = $("<input>").addClass("answer").attr({
        //         type: "radio",
        //         name: questionsAnswers[i].questionNumber + "-answer"
        //     }).attr("data-value", questionsAnswers[i].answers[j]);
        //     var ansText = questionsAnswers[i].answers[j];

        //     q.append(a, ansText);
        // }
        displayAnswers(i, q, ans);

        questionSection.append(q, "<br>");
    }

    return questionSection.append(doneButton());
}

function gradeAnswers() {    // CHECK IF THE RADIO BUTTONS SELECTED MATCH THE CORRECT ANSWER. IF SO 'right++', ELSE IF WRONG 'wrong++', ELSE 'unanswered++'

}

function scoreScreen() { // OVERWRITE THE LAST SCREEN AND DISPLAY THE FINAL SCORES

}


function displayAnswers(currPosition, element, ans) {  //
    for (var j = 0; j < ans.length; j++) {
        var a = $("<input>").addClass("answer").attr({
            type: "radio",
            name: questionsAnswers[currPosition].questionNumber + "-answer"
        }).attr("data-value", questionsAnswers[currPosition].answers[j]);
        var ansText = questionsAnswers[currPosition].answers[j];

        element.append(a, ansText);
    }
}


function doneButton() {
    var done = $("<button>").attr({
        class: "button",
        id: "done"
    });

    done.text("DONE");

    return done;
}


function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
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


$("button").on("click", function () {
    // alert(questionsAnswers[0].correctAnswer);

    writeToPage(questionsScreen());
});

$("button").on("click", ".button", function () {
    alert("werks");
});
