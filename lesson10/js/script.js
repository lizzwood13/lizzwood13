var d = new Date();
var n = d.getFullYear();
document.getElementById('year').innerHTML= n;

today = new Date;
today.toLocaleString('default', {dateStyle: 'full'})
document.getElementById('time').innerHTML= today;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const an= document.querySelector('#banner');

  const friday= new Date();
  let dayOfWeek;
  dayOfWeek=friday.getDay();
  if (dayOfWeek == 5) {
     an.classList.toggle("pancakes");
  }
  else{
      an.classList.remove("pancakes");
      an.style.display="none";
  }
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif']
    }
  });