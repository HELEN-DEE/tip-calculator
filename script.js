const billTotalInput = document.getElementById('bill-total');
const peopleInput = document.getElementById('numberOfPeople').value;
const customInput = document.getElementById('custom');
const tipAmount = document.getElementById('tip-amount')
const splitBill = document.getElementById('split-bill')

// const btnClick = document.getElementById('btn-click')
const btnClick = document.querySelectorAll('.btn-click')
const btnReset = document.getElementById('btnReset')



// ! Tip Percent
const fivePercent = document.getElementById('five-percent')
const tenPercent = document.getElementById('ten-percent')
const fifteenPercent = document.getElementById('fifteen-percent')
const twentyFivePercent = document.getElementById('twenty-five-percent')
const fiftyPercent = document.getElementById('fifty-percent')
const customPercent = document.getElementById('custom-percent')


// ? Final Answers
let grantTotal = document.getElementById('tip-amount')
let tipPerPerson = document.getElementById('split-bill')

fivePercent.addEventListener('click', function(){
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let five_percent = (5/100).toFixed(2)
    let calculateTipByFivePercent =( billInput * five_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByFivePercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(splitBill)
})

tenPercent.addEventListener('click', function() {
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let ten_percent = (10/100).toFixed(2)
    let calculateTipByTenPercent =( billInput * ten_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByTenPercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(numberOfpeople)
})

fifteenPercent.addEventListener('click', function () {
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let fifteen_percent = (15/100).toFixed(2)
    let calculateTipByFifteenPercent =( billInput * fifteen_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByFifteenPercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(numberOfPeople)
})

twentyFivePercent.addEventListener('click', function() {
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let twentyFive_percent = (25/100).toFixed(2)
    let calculateTipByTwentyFivePercent =( billInput * twentyFive_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByTwentyFivePercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(numberOfPeople)
})

fiftyPercent.addEventListener('click', function() {
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let fifty_percent = (50/100).toFixed(2)
    let calculateTipByFiftyPercent =( billInput * fifty_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByFiftyPercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(numberOfPeople)
})

customPercent.addEventListener('input', function() {
    let billInput = parseFloat(billTotalInput.value)
    let numberOfpeople = parseInt(peopleInput)
    let custom_percent = parseFloat(customPercent.value/100)
    let calculateTipByCustomPercent =( billInput * custom_percent).toFixed(2)

    let billTotal = parseFloat((calculateTipByCustomPercent) + billInput).toFixed(2)

    let billPerPerson = (billTotal/numberOfpeople).toFixed(2)
    
    
    tipAmount.innerText = billTotal
    splitBill.innerText = billPerPerson

    console.log(numberOfPeople)
})




// btnClick.forEach(function(btnClick) {
//     btnClick.addEventListener('click', function() {
//         const btnInput = btnClick.textContent;
//         // console.log(btnInput)
//     });
// })

// const inputs = [billInput,peopleInput,customInput]

// inputs.forEach(function(input) {
//     input.addEventListener('input',function() {
//     const inputValue = input.value

//         console.log(inputValue)
//     })
// })

// btnReset.addEventListener('click', function() {
//     location.reload()
// })

// function calculateTip() {
//     const bill = parseFloat(billInput.value) || 0;
//     const noOfPeople = parseFloat(peopleInput.value) || 1;

//     let tipPercentage = 0
//     buttons.forEach(function(btnClick){
//         if(btnClick.classList.contains('active')){
            
//         }
//     })
// }



