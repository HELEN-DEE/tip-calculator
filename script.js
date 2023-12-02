const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('number');
const customInput = document.getElementById('custom');
const tipAmount = document.getElementById('tip-amount')
const splitBill = document.getElementById('split-bill')

// const btnClick = document.getElementById('btn-click')
const btnClick = document.querySelectorAll('.btn-click')
const btnReset = document.getElementById('btnReset')

btnClick.forEach(function(btnClick) {
    btnClick.addEventListener('click', function() {
        const btnInput = btnClick.textContent;
        // console.log(btnInput)
    });
})

const inputs = [billInput,peopleInput,customInput]

inputs.forEach(function(input) {
    input.addEventListener('input',function() {
    const inputValue = input.value

        console.log(inputValue)
    })
})

btnReset.addEventListener('click', function() {
    location.reload()
})

function calculateTip() {
    const bill = parseFloat(billInput.value) || 0;
    const noOfPeople = parseFloat(peopleInput.value) || 1;

    let tipPercentage = 0
    buttons.forEach(function(btnClick){
        if(btnClick.classList.contains('active')){
            
        }
    })
}
