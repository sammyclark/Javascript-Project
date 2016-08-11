var event1 = document.getElementById("button1");
event1.addEventListener('click',round,false);

function round()
    {
        
        var no = parseFloat(document.getElementById("inputno").value);
        
      //collected number - parsefloat is for decimals. 
        
        document.getElementById("output").innerHTML = Math.round(no) + " " + Math.ceil(no) + " " + Math.floor(no);
    }