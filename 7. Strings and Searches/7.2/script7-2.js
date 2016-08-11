var event1 = document.getElementById("button1");
event1.addEventListener('click',clickme,false);
//EVENT LISTENER

function clickme()
    {
        var str = (document.getElementById("textinput").value).split("");
        var num = parseInt(document.getElementById("noinput").value);
       
        //created variables for number and string input and split the string into an array
        
        document.getElementById("original").innerHTML = str
        
        //display original string in HTML span "original"
        
        if ((num >= 0) && (num <= str.length))
            {
                var cut = str.slice(num);
                
                document.getElementById("noindex").innerHTML = num;
                document.getElementById("sentence").innerHTML = cut;
            }
        
        //if number in index, return letter at index number and rest of sentence
        
        else 
            {
                document.getElementById("sentence").innerHTML = "Sorry, there is no letter at this index.";
            }
        
        //if index number is too high, return error message
    }