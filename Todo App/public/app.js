


/////////////////// Main Body ///////////////////////

var val;
var list;
var olist;
var button;
var span;
var newText;
var disp,btnTxt,dltBtn;

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


  dltBtn=document.createElement("BUTTON");
  btnTxt=document.createTextNode("Delete");

  dltBtn.setAttribute("class", "float-right");

 newText=document.createTextNode(val);

 olist.appendChild(list);
 list.appendChild(newText);
 list.appendChild(dltBtn);
 dltBtn.appendChild(btnTxt);


  disp=document.getElementById("listTask").appendChild(olist);
  document.getElementById("task").value='';
  
    }



}

function todoTaskRemove()
{
    // document.getElementById("listTask").removeChild();
    document.getElementById("listTask").remove();
    
}