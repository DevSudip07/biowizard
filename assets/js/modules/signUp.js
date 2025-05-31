const loginToHomeButton = document.querySelector(".loginBackBtn");
loginToHomeButton.addEventListener("click", () => {
    document.location.href = "./login.html";
});

const signupForm = document.querySelector("#signupForm");
const signupButton = document.querySelector(".signupButton");
const username = document.querySelector("#name");
const number = document.querySelector("#number");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const conPassword = document.querySelector("#conPassword");
const otp = document.querySelector("#otp");

const passToggle = document.querySelector(".passToggle i");
passToggle.addEventListener("click", () => {
    password.type == "password" ? password.type = "text" : password.type = "password";
    conPassword.type == "password" ? conPassword.type = "text" : conPassword.type = "password";

    if (passToggle.classList.contains("fa-eye")) {
        passToggle.classList.remove("fa-eye");
        passToggle.classList.add("fa-eye-slash");
    } else {
        passToggle.classList.remove("fa-eye-slash");
        passToggle.classList.add("fa-eye");
    }
});

const alertMessage = document.querySelector(".alert");
password.addEventListener("input", () => {

});

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (username && number && email && password && password && conPassword) {

        if (password.value !== conPassword.value) {
            alertMessage.style.display = "block";
        } else {
            alertMessage.style.display = "none";

            const data = [username, number, email, password, conPassword, passToggle];
            data.forEach((item) => {
                item.style.display = "none";
            });
            otp.style.display = "block";
        }

    }

});