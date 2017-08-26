


var database = firebase.database().ref('/');
var taskInput = document.getElementById('input');
var unOrderList = document.getElementById('unOrderList');



function todo() {

    if(taskInput.value==='')
        {
            alert("Please Be Sure you Entered something !");
           
        }
    else
    {
        var obj = {
        item: input.value,
        // todo: 'DONE'
        }
        database.child('obj').push(obj);
        input.value='';
    }
}

////////////////////////////////////////////// ADD /////////////////////////////////////


database.child('obj').on("child_added", function (snapshot) {
    var demo = snapshot.val()
    demo.id = snapshot.key
    render(demo);

})

  


function render(obj)
{

    var list = document.createElement('LI');
    list.style.opacity= 0.6;
    
    var tagText = document.createTextNode(obj.item);


    var span=document.createElement("SPAN");
    span.appendChild(tagText);
    list.appendChild(span);


    list.setAttribute("class", "list-group-item");
    
    // list.setAttribute("class", "transp")
    
    // list.appendChild(tagText)//<li>getInput</li>
    
   
    list.setAttribute("id",obj.id);


    var dltBtn=document.createElement("BUTTON");
    var btnText=document.createTextNode("Delete");
        
    dltBtn.setAttribute("class", "btn btn-danger float-right");
    dltBtn.setAttribute("title","Are you sure?")

        dltBtn.appendChild(btnText);

        dltBtn.onclick=function()
        {
            remove(obj.id)
        };

        list.appendChild(dltBtn);

        var editBtn=document.createElement("BUTTON");
        editText=document.createTextNode("Edit");
        editBtn.appendChild(editText);
        editBtn.setAttribute("class","btn btn-secondary float-right");

        editBtn.onclick=function(){
            edit(obj.id,obj.item)
        }

        list.appendChild(editBtn);

        unOrderList.setAttribute("class", "list-group");
        unOrderList.appendChild(list)
}

////////////////////////////////////////////// REMOVE /////////////////////////////////////
    function remove(key)
    {
    database.child("obj/"+key).remove();
    }

    database.child("obj").on("child_removed", function(data){
    var deletedLi=document.getElementById(data.key);
    deletedLi.remove();
})

////////////////////////////////////////////// EDIT /////////////////////////////////////


function edit(key ,text){
    
        var newText=prompt("Rewrite your todo",text);
        var newObj={
            item:newText
        }
        database.child("obj/"+key).update(newObj);
    
    }
    
    
    database.child("obj").on("child_changed", function(data){
        var updatedLi=document.getElementById(data.key);
        var textSpan=updatedLi.firstChild;
        textSpan.innerHTML=data.val().item;
    })
    
