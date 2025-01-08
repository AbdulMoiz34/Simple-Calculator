function calculator(newVal) {
    const calcInp = document.getElementById("inp");
    const operators = ["*", "/", "%", "+", "-", "."];
    const lastChar = calcInp.value.slice(-1);
    // console.log(lastChar);
    if (newVal == "=") {
        calcInp.value = eval(calcInp.value);
    } else if (newVal == "DEL") {
        calcInp.value = calcInp.value.slice(0, - 1);
    } else if (newVal == "C") {
        calcInp.value = "";
    } else if (operators.includes(lastChar) && operators.includes(newVal)) {
        calcInp.value = calcInp.value.slice(0, -1) + newVal;
    } else {
        calcInp.value += newVal;
    }
}