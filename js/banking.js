function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';

    return value;
}

function updateTotal(fieldId, amount) {

    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);

    return value;
}

function updateBalance() {
    const initialAmount = 1240;
    const deposit = getInnerTextValue('deposit-total');
    const withdraw = getInnerTextValue('withdraw-total');

    const balance = deposit - withdraw + initialAmount;

    document.getElementById('balance-total').innerText = balance;
}

//handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');

    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance();
    }

})

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');

    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance();
    }
    else if (amount > 0 && amount > balance) {
        alert("You don't have enough balance");
    }
})