function subtract() {
    let a = Number(document.getElementById('firstNumber').value);
    let b = Number(document.getElementById('secondNumber').value);
    let result = a - b;
    document.getElementById('result').textContent = result.toString();
}
