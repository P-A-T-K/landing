const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(
    "https://script.google.com/macros/s/AKfycbyc-S5hETigKY2NlWFXwknfzFlrpjEjm8GfSZ9-Op-xFrzpl_1vnRxw3P4dksAirg/exec",
    {
      method: "POST",
      body: formData,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      message.style.color = "green";
      message.textContent = "You're on the list.";
      form.reset();
    })
    .catch((error) => {
      message.style.color = "red";
      message.textContent = "Submission failed. Try again.";
    });
});