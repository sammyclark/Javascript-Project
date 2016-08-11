var event1 = document.getElementById("button1");
event1.addEventListener('click',search,false);

function search()
    {
        var str = (document.getElementById("textinput").value);
        var find = (document.getElementById("searchinput").value);
        
        var str1 = str.split("");
        var find1 = find.split("");
        
        //variables for getting inputs then splitting them into arrays
        
       var sear = str.indexOf(find);
        
        //searches the sentence to find the search string

        if (sear>= 0)
            {
                document.getElementById("sentence").innerHTML = "Present"
            }
        else
            {
                document.getElementById("sentence").innerHTML = "Absent"
            }
        
        //if string is present, the word "present" is returned. Otherwise "absent" is returned
        
    }

