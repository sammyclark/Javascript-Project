var tumbles = ["R/O", "flick", "tuck"];

document.getElementById("openspace").innerHTML = tumbles

var event1 = document.getElementById("add");
event1.addEventListener('click',replace,false);

function replace()
    {
      tumbles[1] = "whip";
      document.getElementById("openspace").innerHTML = tumbles;
    }
