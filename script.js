"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(operator) {
    const num1Field = document.getElementById('num1');
    const num2Field = document.getElementById('num2');
    const resultDisplay = document.getElementById('result');
    if (!num1Field || !num2Field || !resultDisplay) {
        console.error("HTML elementlari topilmadi!");
        return;
    }
    const a = parseFloat(num1Field.value);
    const b = parseFloat(num2Field.value);
    let res = 0;
    if (isNaN(a) || isNaN(b)) {
        alert("Iltimos, son kiriting!");
        return;
    }
    switch (operator) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = b !== 0 ? a / b : "Nolga bo'lish mumkin emas";
            break;
        default:
            const exhaustiveCheck = operator;
            return exhaustiveCheck;
    }
    // 6. Natijani chiqarish
    resultDisplay.innerText = res.toString();
}
//# sourceMappingURL=script.js.map