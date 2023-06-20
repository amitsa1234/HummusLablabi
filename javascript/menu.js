var resultInput = document.getElementById("result");
var buttons = document.getElementsByClassName("number");
var operatorButtons = document.getElementsByClassName("operator");
var clearButton = document.getElementById("clear");
var calculateButton = document.getElementById("calculate");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        resultInput.value += this.textContent;
    });
}

for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function () {
        resultInput.value += this.textContent;
    });
}

calculateButton.addEventListener("click", function () {
    var result = eval(resultInput.value);
    resultInput.value = result;
});

clearButton.addEventListener("click", function () {
    resultInput.value = "";
});

