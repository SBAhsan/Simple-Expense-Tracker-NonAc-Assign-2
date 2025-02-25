// step-1 : set event handler with the deposit button

document.getElementById('btn-depo').addEventListener('click', function(){
        // step-2 : get the deposit amount from deposit field
        const depoField = document.getElementById('input-field');
        const newDepositAmountString = depoField.value;
        const newDepositAmount = parseFloat(newDepositAmountString);
    
        // step-3 : get the current deposit total
        const depositTotalElement = document.getElementById('total-deposit');
        const previousDepositTotal = depositTotalElement.innerText;
        const previousDepositTotalNumber = parseFloat(previousDepositTotal);
    
        // step-4 : add numbers to set the total deposit
        const currentDepositAmount = previousDepositTotalNumber + newDepositAmount;
    
        depositTotalElement.innerText = currentDepositAmount;
    
        // step-5 : get current balance total 
        const balanceTotalElement = document.getElementById('total-balance');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotalNumber = parseFloat(previousBalanceTotalString);
    
        // step-6 : new current balance total
        const currentBalanceTotal = previousBalanceTotalNumber + newDepositAmount;
    
        balanceTotalElement.innerText = currentBalanceTotal;
    
        // step-7 : deposit field clear
        depoField.value = '';

        if(isNaN(newDepositAmount)){
            alert('Please provide a valid number.');
            return;
        }
    })









// document.getElementById('btn-depo').addEventListener('click', function(){
//     const depoField = document.getElementById('input-field');
//     const newDepositAmountString = depoField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);

//     const totalDepositElement = document.getElementById('total-deposit');
//     const previousDepositTotal = totalDepositElement.innerText;
//     const previousDepositTotalNumber = parseFloat(previousDepositTotal);


//     const currentTotalDeposit = previousDepositTotalNumber + newDepositAmount;

//     totalDepositElement.innerText = currentTotalDeposit;
// })