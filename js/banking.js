function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);

    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the input-field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);

    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const prvBalanceTotal = parseFloat(balanceTotalText);

    return prvBalanceTotal;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    const prvBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = prvBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = prvBalanceTotal - amount;
    }
}

// Handling Deposit button

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})

// Handling Withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('Error!!! You cannot withdraw more than what you have in your account');
    }
})