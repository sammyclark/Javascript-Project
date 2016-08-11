var event1 = document.getElementById("button1");
event1.addEventListener('click',run,false);

function run()
    {
        var input1 = document.getElementById("textinput").value;
        
        //input variable
        
        var textstring = "";
        
        for(var i = 0; i < input1.length; i++)
            {
                textstring += input1.charAt(i) + "";
            }
                document.getElementById("sentence").innerHTML = textstring;
        //output all characters
            
    }