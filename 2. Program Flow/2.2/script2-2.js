
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
 // alert("event listener is working");
    
// var a/b/c - storing the users input into a local variable represented by a lowercase letter
var a = parseInt(document.getElementById("input1").value);
var b = parseInt(document.getElementById("input2").value);
var c = parseInt(document.getElementById("input3").value);
  
//sums the variables and returns the sum
    document.getElementById("answer").innerHTML = a + b + c;
  
  
    
    
} //end of function    

    
