function calculate(operator) {
    let aString = document.getElementById('num1').value;
    let bString = document.getElementById('num2').value;

    let a = parseFloat(aString);
    let b = parseFloat(bString);
    let res = 0;

    if (isNaN(a) || isNaN(b)) {
        alert("Iltimos, son kiriting!");
        return;
    }

    switch (operator) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/':
            res = b !== 0 ? a / b : "Nolga bo'lish mumkin emas";
            break;
    }

    document.getElementById('result').innerText = res;
}