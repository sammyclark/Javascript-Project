var counter = 1;

var event2 = document.getElementById("button1");
event2.addEventListener('click',failcount,false);

 function failcount()
{
    var tries = counter++;
    document.getElementById("counterTest").innerHTML="You had " + tries + " tries.";
}
//Add counter to calculate number of tries (number of clicks)
//This is going up in increments of 2. Fix it


var event1 = document.getElementById("button1");
event1.addEventListener('click',missingno,false);
//Event handler to invoke missingno function

var x = Math.floor((Math.random() * 100) + 1);
//Random number generator outside the function so that a new number is not generated everytime

function missingno() 
{
    var userinput  = parseInt(document.getElementById("guessnumber").value);
    var text = "";
   
    
    //Make the random number generator work
    
    if (userinput===x)
    { 
    
        text = "The number was " + x + ". Well done - correct guess.";
    
    //Make a variable called y for number of tries
    
    } 
    else if (userinput < x)
    {
    
        text = "Your guess is too low.";
    } 
    else
    {
        text = "Your guess is too high.";
    }
    
    document.getElementById("openspace").innerHTML = text;
} 