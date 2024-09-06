
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
        if (!response.ok) {
          // If response status code is not OK, parse the JSON and throw an error with the extracted message
          return response.json().then(errorData => {
            // Create a custom error with the response description
            throw new Error(JSON.stringify(errorData));
          });
        }
        return response.json(); // Parse JSON if response is OK
      })
      .then(data => console.log(data)) // Handle the successful response
      .catch(error => {
        try {
          // Attempt to parse the error message as JSON
          const errorData = JSON.parse(error.message);
          const errorMessage = errorData.resp_desc || 'An unknown error occurred.';
          alert( errorMessage); // Alert the custom error message to the user
        } catch (e) {
          // If parsing fails, use the raw error message
          alert(error.message);
        }
      });
  }