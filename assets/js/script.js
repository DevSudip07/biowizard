import { courses } from "./modules/index.js";
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navMenu = document.querySelector("nav ul");
    const menuButton = document.querySelector(".menuButton i");
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("navToggle");
        menuButton.classList.toggle("fa-xmark");
        navMenu.classList.contains("navToggle") ? header.style.position = "fixed" : header.style.position = "static";
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.textContent.trim() !== "Notes") {
            link.addEventListener("click", () => {
                navMenu.classList.remove("navToggle");
                menuButton.classList.remove("fa-xmark");
                header.style.position = "static";
            });
        }
    });

    const homeToLoginButton = document.querySelector(".homeToLogin");
    homeToLoginButton.addEventListener("click", ()=> {
        document.location.href = "/pages/login.html";
    });

    const heroButton = document.querySelector(".courses-btn");
    heroButton.addEventListener("click", () => {
        document.location.href = "#courseContainer";
    });

    const resumeButton = document.querySelector(".resumeButton");
    resumeButton.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "assets/pdf/debangshu-sir-certificate.pdf";
        link.download = "Debangshu-Sir-Certificate.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    const youtubeButton = document.querySelector(".youtubeButton");
    youtubeButton.addEventListener("click", () => {
        window.open("https://www.youtube.com/@debangshubanerjeebiology", "_blank");
    });

    const courseContainer = document.querySelector("#courses");
    let clutter = "";

    courses.forEach((course) => {
        clutter += `
        <div class="card">
            <img src="${course.image}" alt="Course Image">
            <div class="courseDetails">
                <h3><i class="fa-solid fa-circle-dot"></i> ${course.title}</h3>
                <ul>
                    <li><i class="fa-solid fa-circle-check"></i> Type: ${course.type}</li>
                    <li><i class="fa-solid fa-circle-check"></i> Duration: ${course.duration}</li>
                    <li><i class="fa-solid fa-circle-check"></i> Test: ${course.test}</li>
                    <li><i class="fa-solid fa-circle-check"></i> Device: ${course.device}</li>
                </ul>
                <div class="priceSec">
                    <h4><del>₹5500</del> ₹4999</h4>
                    <button class="enrollButton">Enroll Now</button>
                </div>
            </div>
        </div>
    `;
    });

    courseContainer.innerHTML = clutter;





});