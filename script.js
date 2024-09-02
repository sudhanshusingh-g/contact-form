const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");
const formError = document.querySelectorAll(".error");
const consentErrorMessage = document.querySelector(".consent-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");
  const queryType = formData.get("query-type");
  const message = formData.get("message");
  const consent = form.querySelector("#consent").checked;

  // Reset validation state
  let isValid = true;

  // Validate form and update UI
  if (validateForm(firstName, lastName, email, queryType, message, consent)) {
    successMessage.classList.add("active");
    form.reset(); // Reset form only if validation passes
  } else {
    successMessage.classList.remove("active");
  }
});

function validateForm(firstName, lastName, email, queryType, message, consent) {
  let isValid = true; // Reset isValid for each validation run

  // First Name Validation
  if (firstName === "") {
    formError[0].classList.add("active");
    isValid = false;
  } else {
    formError[0].classList.remove("active");
  }

  // Last Name Validation
  if (lastName === "") {
    formError[1].classList.add("active");
    isValid = false;
  } else {
    formError[1].classList.remove("active");
  }

  // Email Validation
  if (email === "") {
    formError[2].classList.add("active");
    isValid = false;
  } else {
    formError[2].classList.remove("active");
  }

  // Query Type Validation
  if (!queryType) {
    formError[3].classList.add("active");
    isValid = false;
  } else {
    formError[3].classList.remove("active");
  }

  // Message Validation
  if (message === "") {
    formError[4].classList.add("active");
    isValid = false;
  } else {
    formError[4].classList.remove("active");
  }

  // Consent Validation
  if (!consent) {
    consentErrorMessage.classList.add("active");
    isValid = false;
  } else {
    consentErrorMessage.classList.remove("active");
  }

  return isValid;
}
