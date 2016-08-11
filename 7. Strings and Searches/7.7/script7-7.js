var event1 = document.getElementById("button1");
event1.addEventListener('click',change,false);

function change ()
    {

        var str  = document.getElementById("textinput").value;
        var no   = document.getElementById("findstuff").value;
        var char = document.getElementById("replacestuff").value;
        
        //collected string, find and replace values
        
        var str2 = str.replace(no, char);
        
        //replaced character and turned array back into a string
        
        document.getElementById("output").innerHTML = str2;
        
        //output
        
    }