var teams = [];
var textstring = "";

//var event1 = document.getElementById("dothething");
//event1.addEventListener('click',teamlist,false);


//function teamlist() {
    
    teams[0] = "Wildcats"
    teams[1] = "Lady Lightning"
    teams[2] = "G Dubs"
    teams[3] = "Lady Bullets"
    teams[4] = "BSB"
    teams[5] = "Black Ops"
    teams[6] = "Reign"
    teams[7] = "Cali Coed"
    teams[8] = "005"
    teams[9] = "F5  "
    
    
    for (var i = 0; i < teams.length; i++)
    {
        textstring += teams[i] + "";
    }
 
    
     document.getElementById("openspace").innerHTML = textstring;

//}