var input1 = [];
var textstring = "";

var event1 = document.getElementById("dothething");
event1.addEventListener('click',array1,false);
//EVENT LISTENER IS WORKING

function array1() {
    
    input1[0] = document.getElementById("inputa").value;
    input1[1] = document.getElementById("input2").value;
    input1[2] = document.getElementById("input3").value;
    
    for (var i = 0; i < input1.length; i++)
    {
        textstring += input1[i] + "";
    }
 
    
     document.getElementById("openspace").innerHTML = textstring;

}