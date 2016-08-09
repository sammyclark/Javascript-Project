var pets = ["rabbit", "hamster", "horse"];
document.getElementById("openspace").innerHTML = pets;

var event1 = document.getElementById("pop");
event1.addEventListener('click',popfunc,false);

function popfunc()
    {
    
        pets.pop();
        document.getElementById("openspace").innerHTML = pets
    }

var event1 = document.getElementById("push");
event1.addEventListener('click',pushfunc,false);

function pushfunc()
    {
        pets.push("cat");
        document.getElementById("openspace").innerHTML = pets
    }

var event1 = document.getElementById("shift");
event1.addEventListener('click',shiftfunc,false);

function shiftfunc()
    {
        pets.shift();
        document.getElementById("openspace").innerHTML = pets
    }

var event1 = document.getElementById("unshift");
event1.addEventListener('click',unshiftfunc,false);

function unshiftfunc()
    {
        pets.unshift("dog");
        document.getElementById("openspace").innerHTML = pets
    }


