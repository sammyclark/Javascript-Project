function loopyloop() {
    var text = "";
    var i;
    for (i = 0; i < 51; i++) {
        text += "The number is " + i + "<br>";
    }
    document.getElementById("openspace").innerHTML = text;
}