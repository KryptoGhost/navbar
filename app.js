const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const social = document.querySelector(".social-icons");

toggle.addEventListener("click", function() {
   if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
    social.classList.toggle("show-links");
    //links.classList.toggle("show-links");
});