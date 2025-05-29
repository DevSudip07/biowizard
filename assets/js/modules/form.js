const loginToHomeButton = document.querySelector(".loginBackBtn");
loginToHomeButton.addEventListener("click", () => {
    document.location.href = "../index.html";
});

const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const passToggle = document.querySelector(".passToggle i");

passToggle.addEventListener("click", ()=> {
    password.type == "password" ? password.type = "text" : password.type = "password";
    
    if(passToggle.classList.contains("fa-eye")) {
        passToggle.classList.remove("fa-eye");
        passToggle.classList.add("fa-eye-slash");
    }else {
        passToggle.classList.remove("fa-eye-slash");
        passToggle.classList.add("fa-eye");
    }
});