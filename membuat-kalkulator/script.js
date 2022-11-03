const numbers = document.querySelectorAll(".numberClick")
const operators = document.querySelectorAll(".operationClick")
const result = document.getElementById("result")
let operand = document.getElementById('operand')
let resetBtn = document.getElementById('reset')
let decimalBtn = document.querySelectorAll('.decimal')

numbers.forEach((e) => {
    e.addEventListener("click", function() {
        console.log(e.dataset.value)
        let tempOperand = operand.innerHTML
        if (tempOperand == '0') tempOperand = ''
        tempOperand += e.dataset.value
        operand.innerHTML = tempOperand
    })
})

operators.forEach((e) => {
    e.addEventListener("click", function() {
        if (
            operand.innerHTML[operand.innerHTML.length-1] === '+' ||
            operand.innerHTML[operand.innerHTML.length-1] === '-' ||
            operand.innerHTML[operand.innerHTML.length-1] === '*' ||
            operand.innerHTML[operand.innerHTML.length-1] === '/' 
        ) return
        let tempOperand = operand.innerHTML
        if (tempOperand == '0') tempOperand = ''
        tempOperand += e.dataset.value
        operand.innerHTML = tempOperand
    })
})

result.addEventListener("click", function() {
    console.log(operand.innerHTML)
    const hasil = eval(operand.innerHTML.replace(/[^0-9\+\-\*\/]/g, ''))
    operand.innerHTML = hasil
})

resetBtn.addEventListener('click', function() {
    operand.innerHTML = '0'
})

decimalBtn.forEach(function(e) {
    e.addEventListener('click', function() {
        alert('fitur ini belum tersedia')
        // console.log(e)
        // if (
        //     operand.innerHTML[operand.innerHTML.length-1] === '+' ||
        //     operand.innerHTML[operand.innerHTML.length-1] === '-' ||
        //     operand.innerHTML[operand.innerHTML.length-1] === '*' ||
        //     operand.innerHTML[operand.innerHTML.length-1] === '/' 
        // ) return
        // let tempOperand = operand.innerHTML
        // tempOperand += e.dataset.value
        // operand.innerHTML = tempOperand
    })
})