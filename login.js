document.getElementById('loginform').onsubmit = async function(event) {
  event.preventDefault();  // Prevent default form submission
  const username = document.getElementById('Username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
      // If login is successful, you can redirect to another page
      // window.location.href = 'dashboard.html';
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during login.');
  }
};

// Social login buttons
document.querySelector('.google-btn').onclick = function() {
  alert('Google login clicked');
};

document.querySelector('.facebook-btn').onclick = function() {
  alert('Facebook login clicked');
};
