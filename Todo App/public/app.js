


/////////////////// Main Body ///////////////////////

var val;
var list;
var olist;
var button;
var span;
var newText;
var disp;

function todoTaskAdd()
{
if(document.getElementById("task").value === '')
    {
        alert("Enter some todo task to proceed !");

    }
    else{

    
 val=document.getElementById("task").value;

    olist=document.createElement("ul");
    
    // olist.className='customize_bullet';
    
 list=document.createElement("li");

  span=document.createElement("span");

 newText=document.createTextNode(val);

 olist.appendChild(list);
 list.appendChild(span);
 span.appendChild(newText);


  disp=document.getElementById("listTask").appendChild(olist);
  document.getElementById("task").value="";
    }



}

function todoTaskRemove()
{

document.getElementById("listTask").remove();

}