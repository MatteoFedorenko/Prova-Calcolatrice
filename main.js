function writenumber(num) {
    document.getElementById('Inputtxt').value += num;
}
function deleteLastChar() {
    const input =
    document.getElementById('Inputtxt');
    input.value =
    input.value.slice(0, -1);
}
function addSymbol(symbol) {
    document.getElementById('Inputtxt').value += symbol;

    }
function calculateResult() { 
    try { 
        let expression = document.getElementById('Inputtxt').value; 
        let result = eval(expression); document.getElementById('Inputtxt').value = result; } 
        catch (error) { alert('Syntaxis Error!'); 

        } 
    }