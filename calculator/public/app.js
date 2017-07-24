


/////////////////////// MAIN BODY CODE ////////////////////////////////

var operatorSign;
var val1='',val2='',ans='';

var disp=document.getElementById("ans");

///////////////////// OPERATOR RETRIEVING /////////////////////////////

function operator(op)
{
   operatorSign=op;
   disp.innerHTML=operatorSign;
  
}

//////////////// CHECKING AND INCREMENT PROCESS ///////////////////////


function num(n)
{

    if(operatorSign===undefined)
    {
        
        val1+=n;
        disp.innerHTML=val1;
     }
     else{
        val2+=n;
        disp.innerHTML=val2;

         
     }

}

/////////////////////// CALCULATION PERFORMANCE ////////////////////////


function perform(sign)
{
     

    if(sign==='=')
    {
       

        if(operatorSign==='x')
        {
            //  if(parseInt(ans)!==undefined)
            // {
            //     ans=parseInt(ans)*parseInt(val2);
            //     disp.innerHTML=ans;
            //     val2='';
            //     val1='';
            //     operatorSign='';


                
       
            // }
            
            ans=parseInt(val1)*parseInt(val2);
            disp.innerHTML=ans;
            val2='';
            val1='';
            operatorSign='';

        }
        else if(operatorSign==='/')
        {
            ans=(parseInt(val1)/parseInt(val2)).toFixed(8);
            disp.innerHTML=ans;
            val2='';
            val1='';
        }
        else if(operatorSign==='-')
        {
            ans=parseInt(val1)-parseInt(val2);
            disp.innerHTML=ans;
            val2='';
            val1='';
        }
        else{
            ans=parseInt(val1)+parseInt(val2);
            disp.innerHTML=ans;
            val2='';
            val1='';
        }

    }
    else{
        val1='';
        val2='';
        ans='';
        operatorSign=undefined;

        disp.innerHTML='';
    }
    
}


