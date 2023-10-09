

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    // Function to validate the form
    function validateForm() {
        var valid = true;

        // Check if the name field is empty
        if (nameInput.value.trim() === "") {
            valid = false;
            alert("Name field is required");
        } else {
            // Name validation
            var nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

            if (!nameRegex.test(nameInput.value)) {
                valid = false;
                alert("Please enter a valid name");
            }
        }

        // Check if the email field is empty
        if (emailInput.value.trim() === "") {
            valid = false;
            alert("Email field is required");
        } else {
            // Email validation
            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!emailRegex.test(emailInput.value)) {
                valid = false;
                alert("Invalid email address, try again");
            }
        }

        return valid;
    }

    // Bind the validation function to the form's submit event
    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
