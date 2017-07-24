

// Muhammad Hussain Tahir   542

///////////////////// Q example ////////////////////////////



// function printconsol(tnum)
// {

    
//     for(var i=1; i<=10; i++)
//     {
//         console.log(tnum + " x "+i+ " = " + tnum*i);
//     }

// }

// printconsol(7);


// function square(num)
// {
// var sq=num*num;
// return sq;
// }

// console.log(square(+prompt("Enter Num fo squarre")));




///////////////////// Q1 ////////////////////////////

// function datentime()
// {
//     var date=new Date();

//     console.log(date);
// }

// datentime();

///////////////////// Q2 ////////////////////////////

// function greet(fName,lName)
// {
//     document.write("<h1> Hello</h1> " +fName+ " "+lName);

// }
// greet(prompt("Enter ur First Name"),prompt("Enter ur Last Name"));



///////////////////// Q3 ////////////////////////////
// function sum(n1,n2)
// {
//     return n1+n2;
// }
// document.write(sum(+prompt("Enter first number"),+prompt("Enter sencond Number")));

///////////////////// Q4 ////////////////////////////

// function calculator(operand1,operand2,operator)
// {
//     if(operator==="+")
//     {
//         return operand1+operand2;
//     }
//     else if(operator==="-")
//     {
//         return operand1-operand2;

//     }
//     else if(operator==="*")
//     {
//         return operand1*operand2;

//     }
//     else if(operator==="/")
//     {
//         return operand1/operand2;

//     }
//     else{
//          return document.write("INVALID!");
//     }
// }

// document.write(calculator(+prompt("Enter 1st Num"),
// +prompt("Enter 2nd Number"),prompt("Enter a operation to be performed")));

// calculator(2,3,'*');

///////////////////// Q5 ////////////////////////////

// function square(sq)
// {
// var ans=sq*sq;
// return ans;
// }

// document.write(square(+prompt("Enter Nm for Square")));

///////////////////// Q6 ////////////////////////////

function factorial(num)
{
    var n1=num;
    
    var fact=1;
    
    for(var i=0;i<=num;i++)
    {
        var fact=fact*n1;
        
        n1--;
    }
    return fact;
}

document.write(factorial(+prompt("Enter Number for Factorial")));
