// add calculator
const calc = a => {
    let inpElem = document.querySelector("#my-input");
    inpElem.value += a;
}

// solve user equation
const calcResult = () => {
    let inpElem = document.querySelector("#my-input");
    if (inpElem.value !== "") {
        inpElem.value = eval(inpElem.value);
    }
}

// remove all values
const clearAll = () => {
    let inpElem = document.querySelector("#my-input");
    inpElem.value = "";
}

//remove last value
const lastValDelete = () => {
    let inpElem = document.querySelector("#my-input");
    inpElem.value = inpElem.value.slice(0, -1);
}