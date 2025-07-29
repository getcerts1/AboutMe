const roles = [
  "DevOps Engineer",
  "Cloud Architect",
  "Kubernetes Enthusiast",
  "Site Reliability Engineer"
];

let i = 0; // role index
let j = 0; // character index
let isDeleting = false;
let currentText = "";
let typingSpeed = 100; // typing speed in ms

const element = document.getElementById("typing");

function type() {
  const fullText = roles[i];

  if (isDeleting) {
    currentText = fullText.substring(0, j--);
  } else {
    currentText = fullText.substring(0, j++);
  }

  element.innerHTML = currentText;

  if (!isDeleting && j === fullText.length) {
    isDeleting = true;
    typingSpeed = 1500; // pause before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    typingSpeed = 500; // pause before typing next
  } else {
    typingSpeed = isDeleting ? 50 : 100;
  }
}

// Loop using setInterval
function startTyping() {
  setInterval(type, typingSpeed);
}

// Start typing once DOM is ready
document.addEventListener("DOMContentLoaded", startTyping);


function copyEmail() {
  navigator.clipboard.writeText("barrowtech1999@gmail.com");
  alert("Email copied to clipboard!");
}

type();
