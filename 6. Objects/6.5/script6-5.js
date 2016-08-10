var worlds = 
{
    SmallCoed: 
        {
            w2014: "SMOED",
            w2015: "SMOED",
            w2016: "Brandon Senior Black"
        },
    MediumCoed: 
        {
            w2014: "Twist and Shout Obsession",
            w2015: "East Celebrity Elite C5",
            w2016: "SOT Royalty"
        },  
    LargeCoed:
        {
            w2014: "Top Gun Large Coed",
            w2015: "CEA Coed Elite",
            w2016: "CA Cheetahs"
        }
 
};
//defined object with properties and nested properties

        document.getElementById("openspace").innerHTML = worlds.LargeCoed.w2014;
//return winner of LC5 2014 on button click
