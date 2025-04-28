// JavaScript for showing/hiding project details

// Grab the button and project details div
const showExpertiseBtn = document.getElementById("showExpertiseBtn");
const expertiseDetails = document.getElementById("expertiseDetails");
const showProjectBtn = document.getElementById("showProjectBtn");
const projectDetails = document.getElementById("projectDetails");
const showExpBtn = document.getElementById("showExpBtn");
const expDetails = document.getElementById("expDetails");
const showEduBtn = document.getElementById("showEduBtn");
const eduDetails = document.getElementById("eduDetails");
const showCertBtn = document.getElementById("showCertBtn");
const certDetails = document.getElementById("certDetails");
const showOpBtn = document.getElementById("showOpBtn");
const opDetails = document.getElementById("opDetails");

// I have
// Add click event to the button
showExpertiseBtn.addEventListener("click", function () {
  expertiseDetails.classList.toggle("hidden");
});
showProjectBtn.addEventListener("click", function () {
  projectDetails.classList.toggle("hidden");
});
showExpBtn.addEventListener("click", function () {
  expDetails.classList.toggle("hidden");
});
showEduBtn.addEventListener("click", function () {
  eduDetails.classList.toggle("hidden");
});
showCertBtn.addEventListener("click", function () {
  certDetails.classList.toggle("hidden");
});
showOpBtn.addEventListener("click", function () {
  opDetails.classList.toggle("hidden");
});
