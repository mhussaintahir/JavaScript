///////////////////////////// Q1 Head tail  /////////////////////////


var userInp=prompt(" Enter ur Guess Express in term of 'h' or 't' ");

var num=Math.random();

var res=Math.floor(num*2+1);

var show,desc;

var coinSide=['t','h'];

show=coinSide[res-1];

if(userInp!=='h' && userInp!=='t')
{
    desc=" Try Again Enter Valid Input in terms of 'h' or 't' ! ";
    document.getElementById("heading").innerHTML=desc;
    
}
else if(userInp===show)
{
    
    if(show==='h')
    {
    desc=" Its Head ***You Won the toss*** ";
    document.getElementById("img").innerHTML='<img src="images/head.jpg" alt="head" width="200px" height="200px">';
    document.getElementById("heading").innerHTML=desc;
    }
    else
    {
    desc=" Its Tail ***You Won the toss*** ";
     document.getElementById("img").innerHTML='<img src="images/tail.jpg" alt="tail" width="200px" height="200px">';
     document.getElementById("heading").innerHTML=desc;

    }
}
else if(userInp!==show)
{
    
    if(show==='h')
    {
    desc=" Its Head You Loss the toss :/  Try Again";
    document.getElementById("img").innerHTML='<img src="images/head.jpg" alt="head" width="200px" height="200px">';
    document.getElementById("heading").innerHTML=desc;
    }
    else
    {
    desc=" Its Tail You Loss the toss :/ Try Again";
     document.getElementById("img").innerHTML='<img src="images/tail.jpg" alt="tail" width="200px" height="200px">';
     document.getElementById("heading").innerHTML=desc;

    }
}