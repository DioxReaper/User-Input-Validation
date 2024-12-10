function validateForm(event) {
        event.preventDefault(); // Prevent form submission
      
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const zipCode = document.getElementById("zipCode").value.trim();
      
        let isValid = true;
      
        // Validate combined length of first and last names including space
        const fullNameLength = firstName.length + lastName.length + 1; // +1 for the space
        if (fullNameLength >= 20) {
          document.getElementById("firstNameError").textContent = 
            "The combined length of first and last names (including the space) must be less than 20 characters.";
          isValid = false;
        } else {
          document.getElementById("firstNameError").textContent = "";
        }
      
        // Validate ZIP code (exactly 5 digits)
        const zipCodePattern = /^\d{5}$/;
        if (!zipCodePattern.test(zipCode)) {
          document.getElementById("zipCodeError").textContent = "ZIP code must be exactly 5 digits.";
          isValid = false;
        } else {
          document.getElementById("zipCodeError").textContent = "";
        }
      
        // If all fields are valid
        if (isValid) {
          const fullName = `${firstName} ${lastName}`; // Combine first and last name with a space
          document.getElementById("result").textContent = `Name: ${fullName}, ZIP Code: ${zipCode}`;
          document.getElementById("result").style.color = "green";
        } else {
          document.getElementById("result").textContent = "Please correct the errors.";
          document.getElementById("result").style.color = "red";
        }
      }
      
      