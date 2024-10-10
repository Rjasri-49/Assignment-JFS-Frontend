
document.getElementById('employed').addEventListener('change', function () {
    const employerDetails = document.getElementById('employerDetails');
    employerDetails.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('applyForm').addEventListener('submit', function(event) {
    let valid = true;

    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const zip = document.getElementById('zip').value;
    const jobs = document.getElementById('jobs').value;

    
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required';
        valid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        valid = false;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email';
        valid = false;
    }

   
    const phonePattern = /^\d{10}$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number (must be 10 digits)';
        valid = false;
    }

   
    if (!zip || isNaN(zip)) {
        document.getElementById('zipError').textContent = 'ZIP code must be a number';
        valid = false;
    }
   
     if (!jobs) {
        document.getElementById('jobsError').textContent = 'You must select at least one job';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});



        