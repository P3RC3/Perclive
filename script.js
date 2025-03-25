document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.onclick = function() {
        alert('Hello, welcome to my website!');
    };

    document.body.appendChild(button);
});

document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('open');
    });
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("submit-btn");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function checkInputs() {
        if (nameInput.value.length < 3) {
            nameInput.style.borderColor = "red";
        } else {
            nameInput.style.borderColor = "#00ffcc";
        }

        if (!validateEmail(emailInput.value)) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "#00ffcc";
        }

        if (messageInput.value.length < 10) {
            messageInput.style.borderColor = "red";
        } else {
            messageInput.style.borderColor = "#00ffcc";
        }
    }

    nameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    messageInput.addEventListener("input", checkInputs);
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    if (nameInput.value.length >= 3 && validateEmail(emailInput.value) && messageInput.value.length >= 10) {
        alert("Message Sent Successfully! 🚀");
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    } else {
        alert("Please fill out all fields correctly!");
    }
});