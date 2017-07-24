/////////////////////// MAIN BODY CODE ////////////////////////////////

var operatorSign;
var val1 = '',
    val2 = '',
    ans = '';

var disp = document.getElementById("ans");

///////////////////// OPERATOR RETRIEVING /////////////////////////////

function operator(op) {
    operatorSign = op;
    disp.innerHTML = operatorSign;

}

//////////////// CHECKING AND INCREMENT PROCESS ///////////////////////


function num(n) {

    if (operatorSign === undefined) {

        val1 += n;
        disp.innerHTML = val1;
    } else {
        val2 += n;
        disp.innerHTML = val2;


    }

}

/////////////////////// CALCULATION PERFORMANCE ////////////////////////


function perform(sign) {


    if (sign === '=') {


        if (operatorSign === 'x') {
            ans = Number(val1) * Number(val2);
            disp.innerHTML = ans;
            val1 = ans;
            val2 = '';

        } else if (operatorSign === '/') {
            ans = (Number(val1) / Number(val2)).toFixed(8);
            disp.innerHTML = ans;
            val1 = ans;
            val2 = '';
        } else if (operatorSign === '-') {
            ans = Number(val1) - Number(val2);
            disp.innerHTML = ans;
            val1 = ans;
            val2 = '';
        } else {
            ans = Number(val1) + Number(val2);
            disp.innerHTML = ans;
            val1 = ans;
            val2 = '';
        }

    } else {
        val1 = '';
        val2 = '';
        ans = '';
        operatorSign = undefined;

        disp.innerHTML = '';
    }

}

function sqRoot() {
    var root = Math.sqrt(Number(val1));
    disp.innerHTML = root;


}

function square() {
    var sq = (Number(val1)) * (Number(val1));
    disp.innerHTML = sq;

}

function mod() {
    var modulus = (Number(val1) % 2);
    disp.innerHTML = modulus;


}