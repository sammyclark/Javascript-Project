var event1 = document.getElementById("button1");
event1.addEventListener('click',displaytext,false);
//EVENT LISTENER

function displaytext()
    {
        var unchanged = document.getElementById("input1").value;
        var upper = unchanged.toUpperCase();
        var lower = unchanged.toLowerCase();
        
        document.getElementById("clone").innerHTML = unchanged;
        document.getElementById("uppercase").innerHTML = upper;
        document.getElementById("lowercase").innerHTML = lower;
    }

//created variables for unchanged, uppercase and lowercase text then displayed the variables in the html