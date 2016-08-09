var countries = [];
var textstring = "";
    
    countries[0] = "England";
    countries[1] = "France";
    countries[2] = "Italy";
    countries[3] = "Mexico";
    countries[4] = "Poland";
    countries[5] = "Russia";
    countries[6] = "China";
    countries[7] = "Greece";
    countries[8] = "Eygpt";
    countries[9] = "India";
    
//set global variables
    
    for (var i = 0; i < countries.length; i++)
    {
        textstring += countries[i] + "";
    }
//run array in a for loop

var find = -1;

var event1 = document.getElementById("search");
event1.addEventListener('click',findcountry,false);
//event listener

function findcountry() 
    {
        var find = countries.indexOf(document.getElementById("input1").value);
 //Search a country using its index             
        
       if (find >= 0)
           {
               document.getElementById("openspace").innerHTML = "Present"; 
            }
        else
            {
                document.getElementById("openspace").innerHTML = "Absent";
            }
    //If loop determines if country is absent or present
    }
 

