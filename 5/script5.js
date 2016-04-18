
//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
   //alert("event listener is working");
    

var userinput1 = parseInt(document.getElementById("input1").value);
//alert("userinput1");
var userinput2 = parseInt(document.getElementById("input2").value);
//alert("userinput2");

var sum = userinput1 + userinput2;
    
document.getElementById("answer").innerHTML = sum;
}