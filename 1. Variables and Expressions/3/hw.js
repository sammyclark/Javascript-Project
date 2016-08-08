//Variables and expressions 3 - take user input and display it on page

//EVENT LISTENER - invokes the myfirst function when the button is clicked 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

 
//function = set of instructions that can be called repeatedly in a program  
function myfirst(){
    //alert("event listener is working");
    
//User input 1 - storing the users input into a local variable called userinput1
var userinput1 = 
document.getElementById("input1").value;
//alert(userinput1);
    
//Output 1 - writing local variable back to the HTML DOM where element has an id of demo
document.getElementById("demo").innerHTML = userinput1;
}
