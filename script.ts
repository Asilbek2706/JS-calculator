type Operator = '+' | '-' | '*' | '/';

function calculate(operator: Operator): void {
    const num1Field = document.getElementById('num1') as HTMLInputElement | null;
    const num2Field = document.getElementById('num2') as HTMLInputElement | null;
    const resultDisplay = document.getElementById('result') as HTMLElement | null;

    if (!num1Field || !num2Field || !resultDisplay) {
        console.error("HTML elementlari topilmadi!");
        return;
    }

    const a: number = parseFloat(num1Field.value);
    const b: number = parseFloat(num2Field.value);
    let res: number | string = 0;

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
        default:
            const exhaustiveCheck: never = operator;
            return exhaustiveCheck;
    }

    // 6. Natijani chiqarish
    resultDisplay.innerText = res.toString();
}