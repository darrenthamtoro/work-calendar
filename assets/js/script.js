const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayCalendar = moment().format("Do");
$("dayToday").text(dayCalendar);
console.log(dayCalendar);

