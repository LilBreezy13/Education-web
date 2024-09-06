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
              throw new Error(JSON.stringify(errorData));
          });
      }
      return response.json(); // Parse JSON if response is OK
  })
  .then(data => {
      console.log(data); // Handle the successful response
      alert('Login successful!'); // Show success message
  })
  .catch(error => {
      let errorMessage;
      try {
          // Attempt to parse the error message as JSON
          const errorData = JSON.parse(error.message);
          errorMessage = errorData.resp_desc || 'An unknown error occurred.';
      } catch (e) {
          // If parsing fails, use the raw error message
          errorMessage = error.message || 'An unknown error occurred.';
      }
      alert(errorMessage); // Display the same alert on both mobile and desktop
  });
}
