document.querySelector(".reset-password-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.querySelector("input[type='text']").value;
    const newPassword = document.querySelector("input[type='password']").value;
    const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;
  
    // Simple validation check
    if (newPassword === confirmPassword) {
      console.log("Password reset for:", username);
      alert("Your password has been reset successfully.");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  });
  