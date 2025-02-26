
const addMoneyBtn = document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();   
    alert('working')
     const mobileNumber = document.getElementById('cash-out-number-input').value;
     const pinInput = document.getElementById('cash-out-pin-input').value;
     const cashOutAmount = document.getElementById('cash-out-amount').value;
     const convertedCashOutAmount = parseFloat(cashOutAmount)
     const totalAmount = document.getElementById('total-amount').innerText;
     const convertedTotalAmount = parseFloat(totalAmount);
     let remainingBalance = 0;
 
     
     if (mobileNumber.length === 11){
         if (pinInput.length === 4) {
             if (pinInput === '1234') {
                 if(cashOutAmount === '') {
                     alert(' Please add the amount')
                 }
 
                 else {
                     remainingBalance = convertedTotalAmount - convertedCashOutAmount;
                     document.getElementById('total-amount').innerText = remainingBalance;
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