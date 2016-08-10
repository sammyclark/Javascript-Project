var worlds = 
{
    SmallCoed: "Brandon Senior Black",
    MediumCoed: "SOT Royalty",
    LargeCoed: "CA Cheetahs",
    Winner: function()
    {
        return this.SmallCoed;
    }
};
//defined object with properties and functions

        document.getElementById("openspace").innerHTML = worlds.Winner();
//return winner of SC5 2016 on button click
