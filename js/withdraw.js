// step-1 : set event handler with the withdraw button

document.getElementById('btn-with').addEventListener('click', function(){
    // step-2 : get the withdraw amount from the withdraw field

    const withField = document.getElementById('input-field');
    const newWithdrawAmountString = withField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7 : withdraw field clear
    withField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number.');
        return;
    }

    // step-3 : get the current withdraw total
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalString);
 

    // step-5 : cut the balance according to withdraw amount
    const balanceTotalElement = document.getElementById('total-balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);

    if(newWithdrawAmount > balanceTotalNumber){
        alert('This amount is not available in your balance.')
        return;
    }

    // step-4 : add the number to get the current withdraw total
    const currentWithdrawTotal = previousWithdrawTotalNumber + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6 : remaining balance subtracting the withdraw amount
    const remainingTotalBalance = balanceTotalNumber - newWithdrawAmount;

    balanceTotalElement.innerText = remainingTotalBalance;   
})