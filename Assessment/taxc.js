var event1 = document.getElementById("button1");
event1.addEventListener('click',calculate,false);
//event listener - runs calculate function

function calculate()
    {
        var income = parseInt(document.getElementById("incomeinput").value);
        var basic  = (income - 11000) * 0.2;
        var basic2 = 32000 * 0.2;
        var higher = (income - 43000) * 0.4;
        
        //created variables: 
            //income - gets income input and converts it to a number 
            //basic  - calculates 20% income tax
            //basic2 - calculates 20% income tax for people who earn over £43,000
            //higher - calculates 40% income tax
        
        document.getElementById("grossincome").innerHTML = "£" + income;
        document.getElementById("personal").innerHTML = "£" + 11000;
        
        //displays the value of income into gross income span and 11000 (or income if less than £11,000) in personal allowance span
        
        if(income <= 11000)
            {
                document.getElementById("personal").innerHTML = "£" + income;
                document.getElementById("20tax").innerHTML = "£" + 0;
                document.getElementById("40tax").innerHTML = "£" + 0;
                document.getElementById("totaltax").innerHTML = "£" + 0;
                document.getElementById("netincome").innerHTML = "£" + income;
            }
        
        //if income is under or equal to £11,000 - income displayed in netincome output. All other outputs display £0
        
       else if(income > 11000 && income <= 43000)
           {
               document.getElementById("20tax").innerHTML = "£" + basic;
               document.getElementById("40tax").innerHTML = "£" + 0;
               document.getElementById("totaltax").innerHTML = "£" + basic;
               document.getElementById("netincome").innerHTML = "£" + (income - basic);
           }
        
        //if income is greater than £11,000 but under or equal to £43,000 - basic variable is input into 20tax and totaltax outputs. Net income is calculated and displayed in netincome output
        
      else if (income > 43000)
           {
              document.getElementById("20tax").innerHTML = "£" + basic2;
              document.getElementById("40tax").innerHTML = "£" + higher;
              document.getElementById("totaltax").innerHTML = "£" + (basic2 + higher);
              document.getElementById("netincome").innerHTML = "£" + (income - basic2 - higher);
           } 
    
            
        //if income is more than £43,000 - basic2 variable input into 20tax, higher variable input into 40tax, the total tax paid is calculated and net income displayed in netincome output
    }