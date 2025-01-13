let historyArr = [];

function calculator(newVal) {
    const calcInp = document.getElementById("inp");
    const operators = ["*", "/", "%", "+", "-", "."];
    const lastChar = calcInp.value.slice(-1);
    // console.log(lastChar);
    if (newVal == "=") {
        history(calcInp.value);
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

// history
function history(val) {
    const historyBoxEl = document.querySelector(".history-box>div");
    historyBoxEl.innerHTML = "";
    historyArr.push(val);
    for (let i = 0; i < historyArr.length; i++) {
        historyBoxEl.innerHTML += `<button onclick="appendVal(${i})">${historyArr[i]}</button>`;
    }
    // console.log(historyArr);
}

function toggleHistory() {
    const historyBoxEl = document.querySelector(".history-box");
    historyBoxEl.classList.toggle("hidden");
    if (!historyArr.length) {
        historyBoxEl.innerHTML = "<div>There is no history yet.<div>";
        return;
    }
}

function appendVal(i) {
    const newVal = historyArr[i];
    const calcInp = document.getElementById("inp");
    calcInp.value += newVal;
}