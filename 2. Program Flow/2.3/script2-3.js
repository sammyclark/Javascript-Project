 






var b = (document.getElementById("input1").value);


//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);


//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
 // alert("event listener is working");
    
//var a/b/c - storing the users input into a local variable represented by a lowercase letter
var a = (document.getElementById("input1").value);
  

    document.getElementById("answer").innerHTML = a + " , " + b;
  
  
    
    
} //end of function    

// UNFINISHED
    
