// $("h1").css("color","green") 
$("h1").addClass("cursive big");
// $("h1").text("Good Bye");
// $("h1").html("<em>Good Bye</em>");

//Manipulating attributes
// console.log($("h1").attr("src"))
$("a").addClass("big cursive");
// $("a").attr("href", "https://yahoo.com");

$("h1").click(function () { 
    $("h1").css("color", "white");  
});

$("button").click(function () { 
    $("h1").css("color", "purple");
    
});
$("body").keypress(function (e) { 
    $("h1").text(e.key);
});