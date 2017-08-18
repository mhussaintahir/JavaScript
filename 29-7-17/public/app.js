


 
// function send()
// {

//     localStorage.setItem("user","Muhammad Hussain");

// }

// function getItem()
// {
//     var get=localStorage.getItem("user");
//     console.log(get);
// }





////////////////////// OBJECTs ///////////////////////////////////



//     var obj={
//         name:"Muhammad Hussain ",
//         age:19,
//         email:"example@as.com",
//         password:12345,
//         gender:"male"


//     }
//     // var setInfo=localStorage.setItem("user",obj);

//     // var info=localStorage.getItem(obj.name,obj.age,obj.email,obj.password,obj.gender);
//     console.log(obj.email);
// 

var name,age,email,password,gender;

function userInfo()
{

var userName=document.getElementById("uName").value;
var userEmail=document.getElementById("uEmail").value;
var userPass=document.getElementById("uPass").value;


var mObj={
                name:userName,
                email:userEmail,
                password:userPass
}




console.log(mObj);





}


