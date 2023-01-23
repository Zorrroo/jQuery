var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameOn = false;
var level = 0;
$(document).keypress(function () {
    if (!gameOn) {
    //  $("#level-title").text("Level " + level);
     nextSequence();
     gameOn = true;
    }
 });
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level : " + level);
    var randomnumber = Math.random() * 4;
    randomnumber = Math.floor(randomnumber);
    var randomChosenColor = buttonColors[randomnumber];
    gamePattern.push(randomChosenColor)
    animate(randomChosenColor)
    playSound(randomChosenColor);
}
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animate(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});
function animate(colr) {
    $("#" + colr).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}
function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function () {
        nextSequence();
    }, 1000)
}

}else {
    playSound("wrong")
    $("body").addClass("game-over");
    setTimeout(function ()  {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
}
}

function startOver() {
level=0;
userClickedPattern = [];
gamePattern = [];
gameOn = false;
    
}