let powFlag = false;

function addToCalc(value) {
    document.getElementById('displayResult').value += value;

    if(powFlag == true){
        let numbers = document.getElementById('displayResult').value.split('^');
        document.getElementById('displayResult').value = Math.pow(numbers[0], numbers[1]);
        powFlag = false;
    }
}

function finalize() {
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
}

function reset() {
    document.getElementById('displayResult').value = " ";
}

function mathCalc(mathFunc) {
    if(mathFunc == 'pow'){
        powFlag = true;
        document.getElementById('displayResult').value += '^';
    } else{
        let val = document.getElementById('displayResult').value;
        document.getElementById('displayResult').value = Math[mathFunc](val);
    }
}