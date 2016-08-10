function answers(wrongf, wrongs, wrongt, correct)
    {
        this.wrongf = wrongf;
        this.wrongs = wrongs;
        this.wrongt = wrongt;
        this.correct = correct;
    }

//Built object constructor

var quest1 = new answers(36, 24, 21, 30);
var quest2 = new answers("Small Senior X Sharks", "Grey Reef Sharks", "Starspotted Sharks", "Great White Sharks");
var quest3 = new answers(2016, 2014, 2015, 2013);
var quest4 = new answers("Wildcats", "SMOED", "Topgun", "Pink");
var quest5 = new answers(2, 4, 5, 3);

//Created instances
//document.getElementById("demo").innerHTML = quest1.wrongf - TEST for object constructor. 
    
var ans  = [];
var ans2 = [];
var ans3 = [];
var ans4 = [];
var ans5 = [];

    ans.push(quest1.wrongf, quest1.correct, quest1.wrongs, quest1.wrongt);
    ans2.push(quest2.wrongf,quest2.wrongs, quest2.correct, quest2.wrongt);
    ans3.push(quest3.correct, quest3.wrongs, quest3.wrongt, quest3.wrongf);
    ans4.push(quest4.wrongf, quest4.wrongs, quest4.correct, quest4. wrongt);
    ans5.push(quest5.wrongf, quest5.correct, quest5.wrongs, quest5.wrongt);
   
//document.getElementById("demo").innerHTML = ans + ans2 +ans3 + ans4 + ans5; - testing the push

//pushing objects into arrays

var ts  = ""
var ts2 = ""
var ts3 = ""
var ts4 = ""
var ts5 = ""

for (var a = 0; a < ans.length; a++)
    {
        ts += ans[a] + "<br/>";
    }
    document.getElementById("answers1").innerHTML = ts;


for (var b = 0; b < ans2.length; b++)
    {
        ts2 += ans2[b] + "<br/>";
    }
    document.getElementById("answers2").innerHTML = ts2;


for (var c = 0; c < ans3.length; c++)
    {
        ts3 += ans3[c] + "<br/>";
    }
    document.getElementById("answers3").innerHTML = ts3;

for (var d = 0; d < ans4.length; d++)
    {
        ts4 += ans4[d] + "<br/>";
    }
    document.getElementById("answers4").innerHTML = ts4;

for (var e = 0; e < ans5.length; e++)
    {
        ts5 += ans5[e] + "<br/>";
    }
    document.getElementById("answers5").innerHTML = ts5;

//each array element displayed on page

var event1 = document.getElementById("button1");
event1.addEventListener('click',submit1,false);

var event2 = document.getElementById("button2");
event2.addEventListener('click',submit2,false);

var event3 = document.getElementById("button3");
event3.addEventListener('click',submit3,false);

var event4 = document.getElementById("button4");
event4.addEventListener('click',submit4,false);

var event5 = document.getElementById("button5");
event5.addEventListener('click',submit5,false);

//event listeners for functions

function submit1() 
    {
        var find = ans.indexOf(parseInt(document.getElementById("q1").value));
        
    //Search an answer using its index
      
        if (find === 1)
            {
               document.getElementById("dis1").innerHTML = "Well done. You are correct."; 
            }
        else
            {
                document.getElementById("dis1").innerHTML = "Sorry, the correct answer was 30";
            }
    //If loop determines if answer is correct or not
    }

 function submit2() 
    {
        var find = ans2.indexOf(document.getElementById("q2").value);
         //alert(document.getElementById("q2").value);
        //alert("find = " + find);
    //Search an answer using its index
      
        if (find === 2)
            {
               document.getElementById("dis2").innerHTML = "Well done. You are correct."; 
            }
        else
            {
                document.getElementById("dis2").innerHTML = "Sorry, the correct answer was Great White Sharks";
            }
    //If loop determines if answer is correct or not
    }

 function submit3() 
    {
        var find = ans3.indexOf(parseInt(document.getElementById("q3").value));
    //Search an answer using its index
      
        if (find === 0)
            {
               document.getElementById("dis3").innerHTML = "Well done. You are correct."; 
            }
        else
            {
                document.getElementById("dis3").innerHTML = "Sorry, the correct answer was 2013";
            }
    }

 function submit4() 
    {
        var find = ans4.indexOf(document.getElementById("q4").value);
    //Search an answer using its index
      
        if (find === 2)
            {
               document.getElementById("dis4").innerHTML = "Well done. You are correct."; 
            }
        else
            {
                document.getElementById("dis4").innerHTML = "Sorry, the correct answer was Pink";
            }
    }

 function submit5() 
    {
        var find = ans5.indexOf(parseInt(document.getElementById("q5").value));
    //Search an answer using its index
      
        if (find === 1)
            {
               document.getElementById("dis5").innerHTML = "Well done. You are correct."; 
            }
        else
            {
                document.getElementById("dis5").innerHTML = "Sorry, the correct answer was 3";
            }
    }

