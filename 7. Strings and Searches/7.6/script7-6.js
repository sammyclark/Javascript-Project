var event1 = document.getElementById("button1");
event1.addEventListener('click',change,false);

function change ()
    {

        var str  = (document.getElementById("textinput").value).split("");
        var no   = parseInt(document.getElementById("noinput").value);
        var char = document.getElementById("characterinput").value;
        
        //turned string into an array, collected the index number and collected the character
        
        str[no] = char;
        
        var str2 = str.join("");
        
        //replaced character and turned array back into a string
        
        document.getElementById("output").innerHTML = str2;
        
        //output
        
    }