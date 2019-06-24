

$(document).ready(function() {


  var right = 0;
  var wrong = 0;
  var unAnswered = 0;

  var submitClicked = false;
  $("#replayButton").hide();
  console.log(submitClicked);

  $("#submitButton").click(function() {
    submitClicked = true;
    console.log(submitClicked);
    console.log("Submit Button Clicked!");


    stop();
    hideAllQuestions();
    clearInterval(intervalId);
    answerCounter();
    showResults();
    $("#show-number").append("<h2>All done!</h2>");
    $("#replayButton").show(); // shows the "Play Again?" button
  });




  // Copied from StackOverflow, a visual progress bar!
  var timeleft = 10;
  var downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
    if(timeleft <= 0 || submitClicked)
    clearInterval(downloadTimer);
  }, 1000);


  // This is the copied code from the Interval class activity

  var number = 10;

  var intervalId;

  $("#stop").on("click", stop);

  $("#resume").on("click", run);

  function run() {
    stop();
    if (number > 0) {
      stop();
    } else {
      number = 10;
    }
    intervalId = setInterval(decrement, 1000);
  }


  function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>");


    if (number === 0) {
      stop();
      hideAllQuestions();
      clearInterval(intervalId);
      answerCounter();
      showResults();
      $("#show-number").append("<h2>TIME'S UP!</h2>");
      $("#replayButton").show();
    }

  }

  function stop() {

    clearInterval(intervalId);
  }

    run();

    // End of copied Interval class activity code.


  function answerCounter() {
    // This counts up the amount of Correct answers
    right = $("input[value='correct']:checked").length;
    console.log("Correct Answers: " + right);

    // This counts the amount of Wrong answers
    wrong = $("input[value='wrong']:checked").length;

    // unAnswered is equal to the length of the index of ALL questions, 
    // minus the amount right, minus the amount Wrong, so whatever's 
    // left over must be unAnswered
    unAnswered = $(".questionText").length - right - wrong;
  };

  // This hides all questions on the page.
  function hideAllQuestions() {
    $(".question1").hide();
    $(".question2").hide();
    $(".question3").hide();
    $(".question4").hide();
    $(".question5").hide();
    $(".question6").hide();
    $(".question7").hide();
    $(".question8").hide();
    $(".question9").hide();
    $(".question10").hide();
    // This hides the timer and progress bar
    $("#submitButton").hide();
    $("#show-number").hide();
    $("#timerDisplay").hide();
    $("#progressBar").hide();
    $("#timeLeft").hide();
  };

    // This shows all questions on the page.
  function showAllQuestions() {
    $(".question1").show();
    $(".question2").show();
    $(".question3").show();
    $(".question4").show();
    $(".question5").show();
    $(".question6").show();
    $(".question7").show();
    $(".question8").show();
    $(".question9").show();
    $(".question10").show();
    // This shows the timer and progress bar
    $("#submitButton").show();
    $("#submitButton").show();
    $("#show-number").show();
    $("#timerDisplay").show();
    $("#progressBar").show();
    $("#timeLeft").show();
  };

  function showResults() {
    $("#results-right").show();
    $("#results-wrong").show();
    $("#results-unAnswered").show();

    $("#results-right").html("<h2>Correct: " + right + "</h2>");
    $("#results-wrong").html("<h2>Incorrect: " + wrong + "</h2>");
    $("#results-unAnswered").html("<h2>Un-answered: " + unAnswered + "</h2>");
    console.log("The results are being shown!");
  }



  // When the Replay Button is pressed....
  $("#replayButton").click(function() {
    submitClicked = false; //reset the status of the Submit button
    
    console.log(submitClicked);
    console.log("Replay Button Clicked!");
    playAgain();
    $("#replayButton").hide();

  });



  // This resets everything if they want to play again
  function playAgain() {
    // Resets the Progress Bar
    timeleft = 100;
    // Resets the Timer
    number = 100;
    showAllQuestions();
    run(); // starts the timer counting down again
    $("#results-right").hide();
    $("#results-wrong").hide();
    $("#results-unAnswered").hide();
    


  }







});