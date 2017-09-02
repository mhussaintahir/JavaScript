

// Öbject Based Information

var userObject={

    name:"Muhammad Hussain",
    age:"20",
    designation1:"Computer Engineer",
    designation2:"Front-End Developer",
    cellNumber:"0311-2362577",
    email:"comengr.hussaintahir14@gmail.com",

    userReview1:"I am an undergraduate student from Sir Syed University of Engineering and Technolgy batch 2015 and now studying Computer Engineering. Except this i am also studying in Sylani Mass trainig program and enrolled in batch 4.2 here i am focusing on Mobile application and development for this i am giving my best todo something in technology.",
    userReview2:"I have completed my schooling from karachi citizen's Academy in 2012 as 1<sup>st</sup> division. then i completed my Inter from Govt National College Karachi as 1<sup>st</sup> division in 2014 from the begining i was very passionate about computer technologies therefore studying in Sylani is a <strong> Golden Chance </strong> for me. I'll never try to loose this and always be sincere with those who give me this chance and be always with them for development of country.",
    userQuote:"<i>Khamooshi Sy Pehchan Banaty Jao </br> Waqt Khud Batayega Tumhara Naam</i>"
}



document.getElementById("goodName").innerHTML="My name is "+userObject.name;

document.getElementById('shortR').innerHTML="I am "+ userObject.age +" years old "+ userObject.designation1 +" and "+ userObject.designation2 +" too.";

document.getElementById('qR1').innerHTML=userObject.userReview1;
document.getElementById('qR2').innerHTML=userObject.userReview2;
document.getElementById('userBQ').innerHTML=userObject.userQuote;

document.getElementById('cell').innerHTML="Contact me @ "+userObject.cellNumber;
document.getElementById('mail').innerHTML="email me @ "+userObject.email;