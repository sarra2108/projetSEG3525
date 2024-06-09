document.addEventListener('DOMContentLoaded', function() {
    const activitySelect = document.getElementById('activity');
    const subscribersSelect = document.getElementById('subscribers');
    const amountMessage = document.getElementById('amount-message');
    const sessionRegistration = document.getElementById('sessionRegistration');
    const monthlyRegistration = document.getElementById('monthlyRegistration');
    const alreadyMember = document.getElementById('alreadyMember');
    const sessionFields = document.getElementById('sessionFields');
    const memberFields = document.getElementById('memberFields');
    const dateGroup = document.getElementById('dateGroup');
    const confirmButton = document.getElementById('confirmButton');

    function updateAmount() {
        const activity = activitySelect.value;
        const subscribers = parseInt(subscribersSelect.value, 10);

        if (!activity || isNaN(subscribers)) {
            amountMessage.textContent = '';  
            return;
        }

        let message = '';
        let amountPerPerson = 0;

        if (monthlyRegistration.checked) {
            if (activity === 'Yoga with Jana' || activity === 'Pilates with Sara') {
                amountPerPerson = 95;
            } else if (activity === 'HIIT with Mike' || activity === 'Boxing with Andrei') {
                amountPerPerson = 100;
            }
            
            message = `Your total amount is $${amountPerPerson * subscribers} for ${subscribers} person(s)`;
        } else {
            if (activity === 'Yoga with Jana' || activity === 'Pilates with Sara') {
                amountPerPerson = 20;
            } else if (activity === 'HIIT with Mike' || activity === 'Boxing with Andrei') {
                amountPerPerson = 25;
            }
            message = `Your total amount is $${amountPerPerson * subscribers} for ${subscribers} person(s)`;
        }

        amountMessage.textContent = message;
    }

    function toggleFields() {
        if (alreadyMember.checked) {
            sessionFields.style.display = 'none';
            memberFields.style.display = 'block';
            sessionFields.querySelectorAll('input, select').forEach(input => input.disabled = true);
            memberFields.querySelectorAll('input').forEach(input => input.disabled = false);
        } else {
            sessionFields.style.display = 'block';
            memberFields.style.display = 'none';
            sessionFields.querySelectorAll('input, select').forEach(input => input.disabled = false);
            memberFields.querySelectorAll('input').forEach(input => input.disabled = true);
            if (monthlyRegistration.checked) {
                dateGroup.style.display = 'none';
            } else {
                dateGroup.style.display = 'block';
            }
        }
        updateAmount();  
    }

    if (activitySelect) activitySelect.addEventListener('change', updateAmount);
    if (subscribersSelect) subscribersSelect.addEventListener('change', updateAmount);
    if (sessionRegistration) sessionRegistration.addEventListener('change', toggleFields);
    if (monthlyRegistration) monthlyRegistration.addEventListener('change', toggleFields);
    if (alreadyMember) alreadyMember.addEventListener('change', toggleFields);

  
    toggleFields();


    document.getElementById('sessionForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        if (document.activeElement.id === 'submitButton') {
            window.location.href = 'payment.html';
        } else {
            let message = "Thank you for your reservation. Your booking has been successfully confirmed.";
            document.getElementById('modalBodyContent').innerText = message;

            var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
                keyboard: false
            });
            myModal.show();
        }
    });

    confirmButton?.addEventListener('click', function() {
        let message = "Thank you for your reservation. Your booking has been successfully confirmed.";
        document.getElementById('modalBodyContent').innerText = message;

        var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
            keyboard: false
        });
        myModal.show();
    });
});
