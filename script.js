

document.addEventListener('DOMContentLoaded', function() {
    function validatePhoneNumber() {
        const phoneNumber = document.getElementById('PhoneNumber');
        const digitsOnly = /^\d{10}$/;
        
        if (!digitsOnly.test(phoneNumber.value)) {
            phoneNumber.setCustomValidity('Please enter a valid 10-digit phone number.');
        } else {
            phoneNumber.setCustomValidity('');
        }
    }
   
    function validatePaymentForm() {
        const cardNumber = document.getElementById('card-number').value;
        const cvc = document.getElementById('cvc').value;
        const digitsOnly = /^\d+$/;

        let errorMessage = '';

        if (!digitsOnly.test(cardNumber)) {
            errorMessage += 'Card number must contain only digits.\n';
        }

        if (!digitsOnly.test(cvc)) {
            errorMessage += 'CVC must contain only digits.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
            return false;
        }

        return true;
    }
    function validatePasswords() {
        const password = document.getElementById('inputPassword3');
        const confirmPassword = document.getElementById('confirmPassword');

        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.');
        } else {
            confirmPassword.setCustomValidity('');
        }
    }


    function handleSubmit(event) {
        event.preventDefault(); 
        if (event.target.id === 'signupForm') {
            validatePhoneNumber();
            validatePasswords();
            if (!event.target.checkValidity()) {
                event.target.reportValidity();
                return;
            }
        }

        if (event.target.id === 'paymentForm' && !validatePaymentForm()) {
            return;
        }

        let message = "";
        const formId = event.target.id;

        switch (formId) {
            case 'signinForm':
                message = "Thank you. You've been successfully signed in.";
                break;
            case 'signupForm':
                message = "Thank you. You've been successfully signed up.";
                break;
            case 'contactForm':
                message = "Thank you. Your message has been successfully sent.";
                break;
            case 'registerForm':
                message = "Thank you for your reservation. Your booking has been successfully confirmed.";
                break;
            case 'paymentForm':
                message = "Thank you for your reservation. Your booking has been successfully confirmed.";
                break;
            default:
                message = "Thank you.";
        }

        document.getElementById('modalBodyContent').innerText = message;
     
        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
            keyboard: false
        });
        myModal.show();
    }

 
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleSubmit);
    });
});

