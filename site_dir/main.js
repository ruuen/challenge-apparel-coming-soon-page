// Form, input and error message elements
const form = document.querySelector(".content__form");
const formInput = document.querySelector(".content__form-input");
const formErrorMessage = document.querySelector(".content__form-error");
// Class names for form, input and error message state toggles
const classFormIcon = "content__form--invalid";
const classInputBorder = "content__form-input--invalid";
const classErrorMessage = "content__form-error--visible";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    showFormErrors();
    return;
  }

  hideFormErrors();
  form.submit();
});

function showFormErrors() {
  form.classList.add(classFormIcon);
  formInput.classList.add(classInputBorder);
  formErrorMessage.classList.add(classErrorMessage);
}

function hideFormErrors() {
  form.classList.remove(classFormIcon);
  formInput.classList.remove(classInputBorder);
  formErrorMessage.classList.remove(classErrorMessage);
}
