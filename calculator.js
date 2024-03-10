document.addEventListener("DOMContentLoaded", function () {
    var total=0;
    let calculate = document.getElementById("calculate");
    let elementById = function(id) {
        return document.getElementById(id)
    }

    let addListener = function(id,event,code) {
        elementById(id).addEventListener(event, (eventData) => {code(eventData)})
    }

    addEventListener('change', function (eventData) {
        let totalDeductions = document.getElementById("totalDeductions");
        let totalDeductionsTwo = document.getElementById("totalDeductionsTwo");
        let netMonthly = document.getElementById("netMonthly");
        let monthIncome = document.getElementById("monthlyIncome").value;
        console.log(monthIncome.value);
        
        
        let fedTax = (monthIncome*.12);

        let stateTaxes = (monthIncome*.07);

        let socSec = (monthIncome*.062);

        let medicare = (monthIncome*.0145);

        let stDisability = (monthIncome*.01);

        let retInv = (monthIncome*.05);

        // defined before
        let total = fedTax + stateTaxes + socSec + medicare + stDisability + retInv;
        
        let totalTwo= monthIncome - total;

        totalDeductions.value = total;
        totalDeductionsTwo.value = total;
        netMonthly.value = totalTwo;



        console.log(monthIncome)
        document.getElementById("fedTax").innerText = fedTax 

        document.getElementById("stateTaxes").innerText = stateTaxes

        document.getElementById("socSec").innerText = socSec

        document.getElementById("medicare").innerText = medicare

        document.getElementById("stDisability").innerText = stDisability

        document.getElementById("retInv").innerText = retInv
    });


    addListener(`annualIncome`,`change`, (eventData) => {
        let annualIncome = parseFloat(elementById(`annualIncome`).value/12);
        elementById(`monthlyIncome`).value = annualIncome

        elementById(`MonthlyIncomeTwo`).value = annualIncome
    })

    document.getElementById('calculate').addEventListener('click', function (calculate) {
        let inputs = document.querySelectorAll('p input');
        let balance = parseFloat(document.getElementById('netMonthly').value);
        console.log('Balance: ' + balance);
        for(let input of inputs){
            let inputValue = parseFloat(input.value);
            if(!isNaN(inputValue)) {
                balance = balance - inputValue;
            }
        }
        console.log('End Balance: '+ balance);
        let endBalance = document.getElementById('endBalance');
        endBalance.innerHTML = `End Balance: $${balance.toLocaleString('en-US')}`;
      })
})