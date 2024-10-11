function Login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const payload = {
        email: email,
        password: password
    };

    fetch('http://localhost:3000/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // Convert payload to JSON string
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                // If response status code is not OK, throw an error with the extracted message
                throw new Error(data.resp_desc || 'An unknown error occurred. Please try again.');
            }
            // If the response is OK, save the token to local storage
            const token = data.data; // Assuming 'data' contains the token
            localStorage.setItem("apiToken", token);
            console.log("Token saved:", token); // Log token for verification
            return data; // Return data for further handling
        });
    })
    .then(data => {
        console.log(data); // Handle the successful response

        // Show success modal
        const successModal = document.getElementById("successModal");
        successModal.style.display = "block";
        
        // Redirect user to profile page after clicking Okay
        document.getElementById("modalOkayBtn").onclick = function() {
            successModal.style.display = "none";
            window.location.href = '/profile.html';  // Redirect to the profile page
        };
    })
    .catch(error => {
        console.error('Fetch failed:', error.message);

        // Show error modal
        const errorModal = document.getElementById("errorModal");
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = error.message;
        errorModal.style.display = "block";

        // Close error modal on Okay button click
        document.getElementById("modalOkayErrorBtn").onclick = function() {
            errorModal.style.display = "none";
        };
    });
}
