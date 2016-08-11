var event1 = document.getElementById("button1");
event1.addEventListener('click',change,false);

function change()
    {

        var str  = (document.getElementById("textinput").value).split("");
        var no   = document.getElementById("findstuff").value;
        var char = document.getElementById("replacestuff").value;
        
        //collected string - converted to array, find and replace values
        
        for(var i = 0; i < str.length; i++)
            {
                if(str[i] === no)
                    {
                        str[i] = char
                    }
            }
        
        //run array through a for loop. if any character is the same as the searched character, it is replaced with the replace character 
        
         var str2 = str.join("");
        document.getElementById("output").innerHTML = str2;
        
        //array turned into string and outputted
        
    }