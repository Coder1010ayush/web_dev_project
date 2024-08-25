document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    const nameSuggestions = ["Ayush", "Pallab", "Gorilla", "Khargosh", "Laloo"];
    const emailSuggestions = ["ayush@gmail.com", "rabbit@yahoo.com", "pallab@outlook.com"];
    const contactSuggestions = ["1234567890", "0987654321", "1122334455"];

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        if (name === "") {
            alert("Name cannot be empty.");
            event.preventDefault();
            return;
        }

        // Validate Password
        const password = document.getElementById("password").value.trim();
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        // Validate Email
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate Contact
        const contact = document.getElementById("contact").value.trim();
        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(contact)) {
            alert("Please enter a valid 10-digit contact number.");
            event.preventDefault();
            return;
        }

        const degree = document.getElementById("degree").value;
        const engineering = document.getElementById("engineering").value;
        if (degree === "" || engineering === "") {
            alert("Please select both Degree and Engineering fields.");
            event.preventDefault();
            return;
        }

        // Validate Hobbies
        const hobbies = document.querySelectorAll("input[name='hobbies']:checked");
        if (hobbies.length === 0) {
            alert("Please select at least one hobby.");
            event.preventDefault();
            return;
        }

        // Validate Address
        const address = document.getElementById("address").value.trim();
        if (address === "") {
            alert("Address cannot be empty.");
            event.preventDefault();
            return;
        }
    });

    // Autocomplete logic
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact");

    nameInput.addEventListener("input", function () {
        autocomplete(nameInput, nameSuggestions);
    });

    emailInput.addEventListener("input", function () {
        autocomplete(emailInput, emailSuggestions);
    });

    contactInput.addEventListener("input", function () {
        autocomplete(contactInput, contactSuggestions);
    });

    function autocomplete(input, suggestions) {
        const value = input.value;
        input.setAttribute("list", "");

        const datalist = document.createElement("datalist");
        datalist.id = "autocomplete-" + input.id;

        suggestions.forEach(function (suggestion) {
            if (suggestion.toLowerCase().indexOf(value.toLowerCase()) === 0) {
                const option = document.createElement("option");
                option.value = suggestion;
                datalist.appendChild(option);
            }
        });

        input.setAttribute("list", datalist.id);
        document.body.appendChild(datalist);
    }
});
