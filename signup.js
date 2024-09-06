function Signup() {
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const password = document.getElementById('password').value;
    
    // // Basic phone number format validation (e.g., 123-456-7890)
    // const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    // const phoneErrorElement = document.getElementById('phone-error');
  
    // if (!phonePattern.test(phoneNumber)) {
    //     phoneErrorElement.style.display = 'block';
    //     return; // Stop the form submission if phone number is invalid
    // } else {
    //     phoneErrorElement.style.display = 'none';
    // }
  
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
        try {
            const errorData = JSON.parse(error.message);
            const errorMessage = errorData.resp_desc || 'An unknown error occurred.';
           console.log (errorMessage)
            alert(errorMessage); // Alert the custom error message to the user
        } catch (e) {
            console.log("Checking", error.message)
            alert(error.message);
        }

    
    });
  }
  