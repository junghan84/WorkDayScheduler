$(document).ready(function () {
console.log('Hello');
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a")); 

//Assign saveBtn clik listener
$(".saveBtn").on("click", function () {
  console.log(this);
  var value = $(this).siblings(".description").val(); 
  var time = $(this).parent().attr("id"); 

  //set items in local storage.
  localStorage.setItem(time, value);
})

// Save an hour to local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function hourTracker() {
  var currentHour = moment().hours(); 

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log( blockHour, currentHour)

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
}
hourTracker(); //re-run function
})
