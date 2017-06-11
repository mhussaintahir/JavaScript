
// 542
// Muhammad Hussain Tahir


///////////////////////////// Q1 /////////////////////////


// var num=Math.random();

// var res=Math.floor(num*2+1);

// var show;

// if(res=='2')
// {
//      show="Head";
// }
// else
// {
//      show="Tail";
// }

// document.getElementById("heading").innerHTML=res+"<br> "+show;


///////////////////////////// Q2 /////////////////////////


// var userInp=prompt(" Enter ur Guess");

// var num=Math.random();

// var res=Math.floor(num*2+1);

// var show,desc;
// var coinSide=["tail","head"];

// show=coinSide[res-1];


// if(userInp===show)
// {
//     desc="You won the toss ";

// }
// else if(userInp!==show)
// {
//         desc=" Try Again ";

// }


// document.getElementById("heading").innerHTML="User Guess "+userInp+"<br> "+show+"<br> "+desc;


///////////////////////////// Q3 /////////////////////////


// var ri8Now=new Date();

// var month=["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","December",];

// var currentMonth=month[ri8Now.getMonth()];

// document.getElementById("heading").innerHTML=ri8Now+"<br>Current Month  "+currentMonth;


///////////////////////////// Q4 /////////////////////////


// var ri8Now=new Date();

// var days=["Sunday","Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday"];

// var currentDay=days[ri8Now.getDay()];

// var extracted=currentMonth.slice(0,3);


// document.getElementById("heading").innerHTML=ri8Now+"<br>Today is  "+extracted+" ";

///////////////////////////// Q4 /////////////////////////



// var ri8Now=new Date();

// var days=["Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday","Sunday"];

// var currentDay=days[ri8Now.getDay()];

// if(currentDay==='Sunday')
// {
//     var disp="*****Its Funday *****";

// }
// document.getElementById("heading").innerHTML=ri8Now+"<br>  "+disp+" ";


///////////////////////////// Q5 /////////////////////////


// var ri8Now=new Date();

// if(ri8Now.getDate()==15 || ri8Now.getDate()<=15)
// {
//     var disp="First Fifteen week of the week ";

// }
// else{

//         var disp="Last Fifteen week of the week ";

// }
// document.getElementById("heading").innerHTML=ri8Now+"<br>  "+disp+" ";


///////////////////////////// Q6 /////////////////////////

// var ri8Now=new Date();

// console.log( ri8Now.getHours());

// if(ri8Now.getHours()>=13 && ri8Now.getHours()<=23)
// {
//         var disp="Its PM";


// }
// else{
//           var disp="Its AM";
// }
// document.getElementById("heading").innerHTML=ri8Now+"<br>  "+disp+" ";


///////////////////////////// Q6 /////////////////////////



var start=new Date("May 28,2017").getTime();

var current=new Date().getTime();

var dayPassed=Math.floor((current-start)/(1000*60*60*24));


document.getElementById("heading").innerHTML=dayPassed+" days Passed since 1st Ramzan, 2017";
