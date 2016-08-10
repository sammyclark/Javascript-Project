var names = [];
var textstring = "";


names[0] = "Max";
names[1] = "James";
names[2] = "Zach";
names[3] = "Sarah";
//set global variables
// array is working

for (var n = 0; n < names.length; n++)
    {
      textstring += names[n] + "";
       // document.getElementById("openspace").innerHTML = names; - TEST FOR LOOP - for loop working    
    }
//run array in a for loop

var random1 = names[Math.floor(Math.random() * names.length)];
    document.getElementById("openspace").innerHTML = random1; 
//random number generator - generates a random number of a name in the array and returns it 
    
   