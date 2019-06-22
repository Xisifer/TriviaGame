

$(document).ready(function() {


    var right = 0;
    var wrong = 0;
    var unAnswered = 0;


    // Copied from StackOverflow, a visual progress bar!
    var timeleft = 99;
    var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
    }, 1000);


    // This is the copied code from the Interval class activity

    var number = 5;

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
        $("#show-number").append("<h2>TIME'S UP!</h2>");
        timeUp();
        showResults();
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();

    // End of copied Interval class activity code.


// ========================================================
// We want to check for Correct answers, NOT at the point 
// that the button is clicked, but at the time that
// A) the timer runs out, or
// B) the user hits Submit
// ========================================================

    var input = $("input");

    function timeUp() {
    
        // We take the value of the Correct radio button, 
        // and we write it to the radioValue variable

        right = $("input[value='correct']:checked").length;
        console.log("Correct Answers: " + right);
        // And then we write the radioValue variable onto the webpage
        $("#results-right").append("<h2>Correct: </h2>" + right);

        // var wrong = $("input[value='wrong']:checked");
        
        wrong = $(".questionText").length - right;

        console.log("Incorrect Answers: " + wrong);
    };










    function showResults() {
        $("#results-right").html("<h2>Correct: </h2>" + right);
        $("#results-wrong").append("<h2>Incorrect: </h2>" + wrong);
        $("#results-unAnswered").append("<h2>Un-answered: </h2>" + unAnswered);
    }





    // This hides all questions on the page.
    function hideAllQuestions() {
        $(".question1").hide();
        $(".question2").hide();
        $(".question3").hide();
    };

});