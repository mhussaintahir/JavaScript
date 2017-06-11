

// Muhammad Hussain Tahir
// 542



///////////////// Q1 //////////////////


// var myNum=Math.random();

// var res=myNum*6+1;

//  var res1=Math.floor(res);

// var myTag=document.getElementById("myTag");

// myTag.innerHTML=res1;


///////////////// Q2 //////////////////


// var myNum=Math.random();
// var myNum1=Math.random();


// var res=myNum*100+1;

// var res1=myNum1*100+1;


//  var ans=Math.floor(res);

//   var ans1=Math.floor(res1);

//   if(ans===ans1)
//   {
//       var myNum=Math.random();
//       var res=myNum*100+1;
// ans-=1;
//   }


// document.getElementById("myTag").innerHTML="Random num  is "+ans+" and "+ans1;


///////////////// Q3 /////////////////////////////////

// var myinp=prompt("Enter Wiegth");

// for(var i=0;i<myinp.length-2;i++)
// {
    
// var myres=myinp.slice(0,i);
// }

// document.getElementById("myTag").innerHTML="Desired Output is "+myres;




///////////////// Q4 /////////////////////////////////


// var date=new Date();



// document.getElementById("myTag").innerHTML=date+"\nYear "+date.getFullYear()+"\nMonth "+date.getMonth()+
// "\nDay "+date.getDay()+"\nHours "+date.getHours()+"\nMinutes "+date.getMinutes();


///////////////// Q5 /////////////////////////////////


var numbers=["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN"];
var myinp=+prompt("Enter Numbers between 1-20");
    
var myres=numbers[myinp];


document.getElementById("myTag").innerHTML="Desired Output is "+myres;


