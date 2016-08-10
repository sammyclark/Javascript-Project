var person = 
    {
        FirstName: "Sarah",
        LastName: "Clark",
        FullName: function()
            {
                return this.FirstName + " " + this.LastName;
            }
    };
//defined object with properties and method

document.getElementById("openspace"). innerHTML = person.FullName();
//returned method to openspace span
