var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
var next_week = new Date(today);
next_week.setDate(today.getDate() + 7);

function dateSuffix(date) {
  var day_num = date.getDate() % 10;
  if (day_num == 1) {
    suffix = "st";
  } else if (day_num == 2) {
    suffix = "nd";
  } else if (day_num == 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  return date.getDate() + suffix;
}

function formattedMonth(date) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var days_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days_of_week[date.getDay()];
}

function formattedDate(date) {
  return formattedDay(date) + ", " + formattedMonth(date) + " the " + dateSuffix(date);
}

function formattedTime(date) {
  return date.getHours() + ":" + date.getMinutes();
}

console.log("Today's day is " + formattedDate(today));