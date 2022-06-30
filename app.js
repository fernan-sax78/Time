(function(){
    "use strict";




function reloj() {
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let sec_string = new String(seconds);

  let min_string = new String(minutes);

  let hour_string = new String(hour);

  if (sec_string.length === 1) {
    sec_string = "0" + seconds;
  }

  if (min_string.length === 1) {
    min_string = "0" + minutes;
  }

  if (hour_string.length === 1) {
    hour_string = "0" + hour;
  }

  document.getElementById(
    "time"
  ).innerText = `${hour_string}:${min_string}:${sec_string}`;
}

window.addEventListener("load", reloj);

setInterval(reloj, 1000);







}());