function getdayandtime(){

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
    default
        day="I don't know"
}

var hours = today.getHours();
var minutes = today.getMinutes();
var time = hours + ":" + minutes
        
document.getElementById("demo").innerHTML = "Today is " + day;
}

 //UNFINISHED       