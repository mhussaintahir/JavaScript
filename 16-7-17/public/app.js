

// 542 Muhammad Hussain Tahir

////////////// q1///////////////


// var dof="Sat";

// switch(dof)
// {
//     case "Sat":
//     console.log("saturday");
//     break;
    
//     case "Sun":
//     console.log("sunday");

//     case "Mon":
//     console.log("MOnday");

//     default:
//     console.log("NAN")
// }

/////////////////// q1//////////////

// var b = +prompt("Enter Base");
// var p = +prompt("Enter perp");

// function calculateHyp(base,perp)
// {
//     function doSquare(num){
//         return num*num;
//     }
//     var hyp=doSquare(base)+doSquare(perp) ;

// var hypotenous=Math.sqrt(hyp);

// return hypotenous
// }


// document.getElementById("header").innerHTML=calculateHyp(b,p);

/////////////////// q2//////////////


// function calcArguments(n1,n2,n3,n4,n5)
// {

// var largestNum=0;

// for(var i=0;i<arguments.length;i++)
// {

//     if(arguments[i]>largestNum)
//     {
//         largestNum=arguments[i];
//     }
// }
// return largestNum;

// }
// document.getElementById("header").innerHTML=calcArguments(1,2,3,4,9);



/////////////////// q3//////////////

// function calculateArea(w,h)

// {
// return w*h;
// }
// document.getElementById("header").innerHTML=calculateArea(+prompt("Enter width"),+prompt("Enter height"));

//////////////////// q3b//////////////

function calculateArea(w,h)
var area=0;
{
    for(var i=0;i<arguments.length;i++){
         area=arguments[i]*arguments[i+1]; 
    }
return area;
}
document.getElementById("header").innerHTML=calculateArea(+prompt("Enter width"),+prompt("Enter height"));

