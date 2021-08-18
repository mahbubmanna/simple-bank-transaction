// handle deposit button - event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // getting the deposit amount
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //Update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input-field
    depositInput.value = '';
})


//handle withdraw button - event
document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting the withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    //Update Withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;
    // update account balance
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input-field
    withdrawInput.value = '';
})

