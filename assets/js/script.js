

var dayCalendar = moment().format("dddd , MMMM Do YYYY");
$("#currentDay").text(dayCalendar);
console.log(dayCalendar);
 
//setup day calendar
//9-5 schedule
//input fields for plans

$(".saveBtn").on('click', function() {
    console.log("Button is clicked", $(this)); 
    var userInput = $(this).siblings(".description").val().trim(); 
    console.log("userInput", userInput);
    var timeStamp =$(this).siblings(".hour").text().trim();
    console.log("timeStamp", timeStamp);

//store the plans in local storage
localStorage.setItem(timeStamp, userInput)
});


//GETTING VALUE FROM Local Storage to HTML PAGE 

$("#hour-9").val(localStorage.getItem("9:00 am"));
$("#hour-10").val(localStorage.getItem("10:00 am"));
$("#hour-11").val(localStorage.getItem("11:00 am"));
$("#hour-12").val(localStorage.getItem("12:00 pm"));
$("#hour-1").val(localStorage.getItem("1:00 pm"));
$("#hour-2").val(localStorage.getItem("2:00 pm"));
$("#hour-3").val(localStorage.getItem("3:00 pm"));
$("#hour-4").val(localStorage.getItem("4:00 pm"));
$("#hour-5").val(localStorage.getItem("5:00 pm"));

var currentHour = moment().hours(); 
console.log(currentHour)
// if(timeStamp)

//grab a row and set the CSS Class for it inside a forloop or .each()
$(".row").addClass(".past");