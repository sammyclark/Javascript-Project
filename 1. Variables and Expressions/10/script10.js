
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click', myfirst, false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
 // alert("event listener is working");
    
// var userinputx - storing the users input into a local variable represented by "userinputx"
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input2").value);

    //displays whether numbers are more or less than 10
if (userinput1 > 10 && userinput2 > 10) {
    document.getElementById("answer").innerHTML = "both more than 10";
} else if (userinput1 > 10) {
    document.getElementById("answer").innerHTML = "first number more than 10";
} else {
    document.getElementById("answer").innerHTML = "second number more than 10";
}  

    
  

    
  
  
    
    
} //end of function    

    
