/*
    Your challenge is to create a small quiz using an array of objects in Javascript.

    The quiz can be on any topic of your choice and no more than 5 questions.

    An additional challenge will be to track the users score.

 

    You should use to build your solution

    An object constructor to create quiz objects

    Push objects into an array

    Use a For loop to rotate through the array and display the questions onto the DOM

 

    Extra features

    Users receive a response to their anseers
*/



//First set up questions, possible answers and which answer (in order) is correct
var q1 = "What is TJ's full name?";
var answerArray1 = ["Teejas","Tejas","TJ","Tejaas","Jack"]
var s1 = 2;

var q2 = "What is TJ's favourite alcoholic drink?";
var answerArray2 = ["Beer","Cider","Whiskey","Rum","Gin"]
var s2 = 3;

var q3 = "What is TJ's favourite subject?";
var answerArray3 = ["Maths","Biology","Psychology","Geography","French"]
var s3 = 1;

var q4 = "What is TJ's favourite series of books?";
var answerArray4 = ["Harry Potter","Twilight","A Song of Ice and Fire","The Hunger Games","The Wheel of Time"]
var s4 = 5;

var q5 = "Test your luck";
var answerArray5 = ["a","b","c","d","e"]
var s5 = Math.ceil(5*Math.random());

//Use setup to create question objects
var Q1 = new Question(q1,answerArray1,s1);
var Q2 = new Question(q2,answerArray2,s2);
var Q3 = new Question(q3,answerArray3,s3);
var Q4 = new Question(q4,answerArray4,s4);
var Q5 = new Question(q5,answerArray5,s5);

//Create an array of question objects
var questionBank = [Q1,Q2,Q3,Q4,Q5];

//Enter the questions and possible answers into the relevent HTML content
GenerateContent();

//Create event for when the "Mark" button is clicked
var event = document.getElementById("button");
event.addEventListener("click",Mark,false);








/******************Object Constructors****************/
function Question(question,answerArray,solution)
{
    this.question = question;
    this.answerArray = answerArray;
    this.solution = solution;
}

/******************Function Definitions***************/

function GenerateContent()
{
    var questionSpan = document.getElementsByClassName("Q");
    
    for(var i = 0; i < questionSpan.length; i++)
    {
        //Select the div in which the question should be written
        questionDisplayDiv = questionSpan[i].getElementsByClassName("QuestionDisplay")[0];
        
        //Fill in questions in html file
        questionDisplayDiv.innerHTML = questionBank[i].question;
    
        //Select the span in which the answers are in
        var answersInput = questionSpan[i].getElementsByClassName("Answers");
        
        for(var j = 0; j < answersInput.length; j++)
        {
            //Fill in possible answers in html file
            answersInput[j].innerHTML = questionBank[i].answerArray[j];
        }
    }
}

function Mark()
{
    var totalMarks = 0;
    
    //Perhaps should be global as is also used by GenerateContent
    var questionSpan = document.getElementsByClassName("Q");
    
    for(var i = 0; i < questionSpan.length; i++)
    {
        //Select the input boxes in the form
        var userInput = questionSpan[i].getElementsByClassName("Input");
        
        //Get which number answer is correct from the solution property
        var correctAnswer = questionBank[i].solution;
        
        //Decrement that value so it can be used to index the array at the correct offset
        var j = correctAnswer - 1;
        
        var isTrue = userInput[j].checked;
        //Check to see if the correct answer was selected
        if(userInput[j].checked)
        {
            //If answer is correct, increment the totalMarks
            totalMarks++;
            
            //If answer is correct add text under question saying correct
            document.getElementsByClassName("Validity")[i].innerHTML = "<span style=\"color:green\">Correct</span>"
        }
        else
        {
            //If answer is correct add text under question saying incorrect
            document.getElementsByClassName("Validity")[i].innerHTML = "<span style=\"color:red\">Incorrect</span>"
        }
           
    }
    //Write the final total marks into the result span
    document.getElementById("result").innerHTML = totalMarks;
    
    
}