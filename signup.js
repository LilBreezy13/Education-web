function Signup() {
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const password = document.getElementById('password').value;

    const payload = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password
    };

    console.log('Submitting signup form', payload);

    fetch('http://localhost:3000/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(JSON.stringify(errorData));
            });
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the successful response
        alert('Signup successful!'); // Provide feedback to the user
    })
    .catch(error => {
        let errorMessage;
        
        try {
            const errorData = JSON.parse(error.message);
            errorMessage = errorData.resp_desc || 'An unknown error occurred. Please try again.';
        } catch (e) {
            errorMessage = error.message || 'An unknown error occurred. Please try again.';
        }

        console.log('Fetch failed:', errorMessage);
        alert(errorMessage); // Display the same alert on both mobile and desktop
    });
}
