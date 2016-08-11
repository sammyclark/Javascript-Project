var event1 = document.getElementById("button1");
event1.addEventListener('click',search,false);

function search()
    {
        var str = (document.getElementById("textinput").value);
        var find = (document.getElementById("searchinput").value);
        
        var str1 = str.split("");
        var find1 = find.split("");
        
        //variables for getting inputs then splitting them into arrays
        
       var sear = str.lastIndexOf(find);
        
        //searches the sentence to find the last instance of the search string

        if (sear >= 0)
            {
                document.getElementById("sentence").innerHTML = "The last position of this in the sentence is " + sear
            }
        else
            {
                document.getElementById("sentence").innerHTML = "Error. Not in sentence"
            }
    
        //if string is present, the last instance of its use is returned. Otherwise an error message is displayed
    
    }