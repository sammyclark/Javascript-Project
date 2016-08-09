var input = [];
document.getElementById("openspace").innerHTML = input;

var event1 = document.getElementById("dothething");
event1.addEventListener('click',array1,false);
//EVENT LISTENER IS WORKING

function array1() {
    
    
    input.push(document.getElementById("input1").value);
    
    var textstring = " ";
    
    for (var i = 0; i < input.length; i++){
        textstring += input[i] + " ";
    }
    
     document.getElementById("openspace").innerHTML = textstring + input.length;
    
    

};