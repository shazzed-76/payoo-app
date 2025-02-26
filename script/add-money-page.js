
    document.getElementById('cash-out-form').style.display = 'none';

    document.getElementById('add-btn').addEventListener('click', function () {
        document.getElementById('add-money-form').style.display = 'block'; 
        document.getElementById('cash-out-form').style.display = 'none';
    })

    document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('cash-out-form').style.display = 'block';
    document.getElementById('add-money-form').style.display = 'none';
})




const addMoneyBtn = document.getElementById('add-money-btn').addEventListener('click', function (event) {
   event.preventDefault();
    const mobileNumber = document.getElementById('number-input').value;
    const pinInput = document.getElementById('pin-input').value;
    const addAmountInput = document.getElementById('add-amount-input').value;
    const convertedAddAmountInput = parseFloat(addAmountInput)
    let totalAmount = document.getElementById('total-amount').innerText;
    let convertedTotalAmount = parseFloat(totalAmount);
    let totalBalance = 0;

    
    if (mobileNumber.length === 11){
        if (pinInput.length === 4) {
            if (pinInput === '1234') {
                if(addAmountInput === '') {
                    alert(' Please add the amount')
                }

                else {
                    totalBalance = convertedTotalAmount + convertedAddAmountInput;
                    document.getElementById('total-amount').innerText = totalBalance;
                }
            }

            else {
                alert('Enter correct pin')
            }
        }

        else {
            alert('Enter 4 digit')
        }
    }
    
    else {
        alert('Something wrong')
    }
    

})