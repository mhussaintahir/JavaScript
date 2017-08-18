

var name,age,email,password,gender;

function userInfo()
{

var userName=document.getElementById("uName").value;
var userEmail=document.getElementById("uEmail").value;
var userPass=document.getElementById("uPass").value;


// var mObj={
//     name:"Muhammad Hussain",
//     price:3.99,
//     spaces:"100 GB",
//     data:"1000 GB/month",
//     pages:10,
//     discountMonth:["JAN","JUN","SEP"]


// }

var mObj={

    name:userName,
    email:userEmail,
    password:userPass


}

var convString=JSON.stringify(mObj);

localStorage.setItem("data",convString);

var convParse=JSON.parse(convString);



console.log(convParse.name);







}


