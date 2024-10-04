document.querySelector(".signup-form").addEventListener("submit", function(event) {
    var name = document.querySelector("input[type='text']").value;
    var email = document.querySelector("input[type='email']").value;
    var password = document.querySelector("input[type='password']").value;
    var confirmPassword = document.querySelectorAll("input[type='password']")[1].value;
  
    // Simple validation checks
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
      event.preventDefault();
    } else {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      // Here you would send this data to your backend for processing
    }
  });
  