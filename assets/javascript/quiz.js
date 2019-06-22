

$(document).ready(function() {


    var right = 0;
    var wrong = 0;
    var unanswered = 0;


    // Copied from StackOverflow, a visual progress bar!
    var timeleft = 99;
    var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
    }, 1000);


    // This is the copied code from the Interval class activity

    var number = 100;

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
        showResults();
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();

    // End of copied Interval class activity code.

    var answers = [];



    function showResults() {
        $("#results-right").append("<h2>Correct: </h2>" + right);
        $("#results-wrong").append("<h2>Incorrect: </h2>" + right);
        $("#results-unAnswered").append("<h2>Un-answered: </h2>" + right);
    }





    // This hides all questions on the page.
    function hideAllQuestions() {
        $(".question1").hide();
        $(".question2").hide();
        $(".question3").hide();
    };

});