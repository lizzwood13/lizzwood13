var d = new Date();
var n = d.getFullYear();
document.getElementById('year').innerHTML= n;

var m_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
var myDate = new Date();
myDate.setDate(myDate.getDate()+7);
var curr_date = myDate.getDate();
var curr_month = myDate.getMonth();
var curr_day  = myDate.getDay();
var curr_year = myDate.getFullYear();
var n= (d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + curr_year);
document.getElementById('time').innerHTML= n;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }