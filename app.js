const currentNumber = document.querySelector('.currentNumber')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

let previousNumber = ''

let mathSign = ''

let result = ''

function displayNumbers() {
	if (this.textContent === '.' && currentNumber.textContent.includes('.'))
		return

	currentNumber.textContent += this.textContent
}

function assignment() {
	if (currentNumber.textContent === '' && this.textContent === '-') {
		currentNumber.textContent = '-'
		return
	}

	previousNumber = currentNumber.textContent
	mathSign = this.textContent
	currentNumber.textContent = ''

	result = ''
}

function calculating() {
	if (currentNumber.textContent === '' || previousNumber.textContent === '')
		return
	if (result !== '') return

	let a = Number(currentNumber.textContent)
	let b = Number(previousNumber)

	if (mathSign === '÷') {
		result = b / a
	} else if (mathSign === 'x') {
		result = a * b
	} else if (mathSign === '-') {
		result = b - a
	} else if (mathSign === '+') {
		result = a + b
	}

	currentNumber.textContent = result
}

function clearEverything() {
	result = ''
	currentNumber.textContent = ''
	previousNumber = ''
	mathSign = ''
}

numbers.forEach(num => num.addEventListener('click', displayNumbers))

operators.forEach(operator => operator.addEventListener('click', assignment))

equals.addEventListener('click', calculating)

clear.addEventListener('click', clearEverything)
