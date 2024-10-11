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
        return response.json().then(data => {
            if (!response.ok) {
                // If the response is not ok, throw an error with the error message
                throw new Error(data.resp_desc || 'An unknown error occurred. Please try again.');
            }
            // If the response is ok, save the token to local storage
            const token = data.data; // Assuming 'data' contains the token
            localStorage.setItem("apiToken", token);
            console.log("Token saved:", token); // Log token for verification
            return data; // Return the data for further handling
        });
    })
    .then(data => {
        console.log(data); // Handle the successful response
        alert('Signup successful!'); // Provide feedback to the user
        
        // Redirect the user to their profile page after successful signup
        window.location.href = '/profile.html';  // Adjust the URL to your actual profile page route
    })
    .catch(error => {
        console.error('Fetch failed:', error.message);
        alert(error.message); // Display the same alert on both mobile and desktop
    });
}
