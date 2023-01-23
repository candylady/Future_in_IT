const calculatorNumber = document.getElementsByClassName('calculator__number');
const calculatorInput = document.getElementById('calculator__input');
const calculatorSign = document.getElementsByClassName('calculator__sign');
const calculatorResult = document.getElementById('calculator__result');

for(let i = 0; i < calculatorNumber.length; i++){
	calculatorNumber[i].onclick = function(){
		calculatorInput.value += this.innerText;
	}
}

for (let i = 0; i < calculatorSign.length; i++){
    calculatorSign[i].onclick = function () {
        calculatorInput.value += this.innerText;
    }
}

calculatorResult.onclick = function () {
    calculatorInput.value = eval(calculatorInput.value);
}
