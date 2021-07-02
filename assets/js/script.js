const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayCalendar = moment().format("dddd");
$("dayToday").text(dayCalendar);
console.log(dayCalendar);

//setup day calendar
//9-5 schedule
//input fields for plans
//store the plans in local storage
