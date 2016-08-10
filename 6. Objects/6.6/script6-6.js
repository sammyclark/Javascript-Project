function person(first, last, age)
    {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

//Built object constructor

var me = new person("Sarah", "Clark", 22);
var bff = new person("Alex", "Kingham", 23);
var bae = new person("Zac", "Fenlon", 23);

//Created instances

document.getElementById("sc").innerHTML = me.firstName + " " + me.lastName + " is " + me.age;
document.getElementById("ak").innerHTML = bff.firstName + " " + bff.lastName + " is " + bff.age;
document.getElementById("zf").innerHTML = bae.firstName + " " + bae.lastName + " is " + bae.age;

//displayed names and ages to spans