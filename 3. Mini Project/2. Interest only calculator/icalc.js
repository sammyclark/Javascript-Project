var event1 = document.getElementById("calculate");
event1.addEventListener('click',monthloop,false);
//EVENT LISTENER

function monthloop() {
    
    var a = parseInt(document.getElementById("borrowing").value);
    var b = parseInt(document.getElementById("interest").value);
    var c = parseInt(document.getElementById("duration").value);
    //Convert input strings into numbers
    
    var x = (a * b/100); 
    var y = x * c;
    
    document.getElementById("monthly").innerHTML = x;
    document.getElementById("total").innerHTML = y;
    
}
