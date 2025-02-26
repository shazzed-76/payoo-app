
document.getElementById('log-in-btn').addEventListener('click', function (event) {

    event.preventDefault();
    const mobileNumber = document.getElementById('number-input').value;
    const pinNumber = document.getElementById('pin-input').value;
    const convertedPin = parseInt(pinNumber);
   console.log(typeof mobileNumber)

    if (mobileNumber.length === 11) {
        if (convertedPin === 1234 && pinNumber.length === 4) {
           window.location.href = 'add-money-page.html';
        }

        else {
            alert("Pin dosen't matched")
        }
    }

    else {
        alert('Enter valid number')
    }
    
})