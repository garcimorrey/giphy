$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var currentScore = 0;
  
    var getRandomNumber = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    var randomNumber = getRandomNumber(30, 110);
  
    $("#randomNumber").html(randomNumber);
  
    var crystal1 = getRandomNumber(1, 9);
    var crystal2 = getRandomNumber(1, 9);
    var crystal3 = getRandomNumber(1, 9);
    var crystal4 = getRandomNumber(1, 9);
  
    var newValues = function() {
      crystal1 = getRandomNumber(1, 9);
      crystal2 = getRandomNumber(1, 9);
      crystal3 = getRandomNumber(1, 9);
      crystal4 = getRandomNumber(1, 9);
    };

    $("#crystal1").on("click", function() {
      currentScore += crystal1;
      $("#currentScore").html(currentScore);
      updateScore();
    });
  
    $("#crystal2").on("click", function() {
      currentScore += crystal2;
      $("#currentScore").html(currentScore);
      updateScore();
    });
  
    $("#crystal3").on("click", function() {
      currentScore += crystal3;
      $("#currentScore").html(currentScore);
      updateScore();
    });
  
    $("#crystal4").on("click", function() {
      currentScore += crystal4;
      $("#currentScore").html(currentScore);
      updateScore();
    });

    var updateScore = function() {
      if (randomNumber === currentScore) {
        wins++;
        $("#wins").html(wins);
        $("#randomNumber").empty();
        randomNumber = getRandomNumber(18,150);
        $("#randomNumber").html(randomNumber);
        currentScore = 0;
        $("#currentScore").html(currentScore)
        newValues();
      }
      if (randomNumber < currentScore) {
        losses++;
        $("#losses").html(losses);
        $("#randomNumber").empty();
        randomNumber = getRandomNumber(18,150);
        $("#randomNumber").html(randomNumber);
        currentScore = 0;
        $("#currentScore").html(currentScore)
        newValues();
      }
      $("#restart").on("click", function(){
        document.location.href = "";
      })
    }
  
  });