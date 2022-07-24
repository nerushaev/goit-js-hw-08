import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const formSubmitRef = document.querySelector('button');

checkLocalStorageForm();

formRef.addEventListener('input', throttle(onInputForm, 500, { leading: false }));
formSubmitRef.addEventListener('click', onSubmitFormClick);

function checkLocalStorageForm() {
  const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formValue === null) {
    return;
  }
  setStartFormValue(formValue);
};

function setStartFormValue({ email, message }) {
  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
};

function onInputForm() {
  const formValue = getFormValue();
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
};

function getFormValue() {
  const email = formRef.elements.email.value;
  const message = formRef.elements.message.value;

  return { email, message };
};

function onSubmitFormClick(e) {
  e.preventDefault();
  const formValue = getFormValue();
  console.log(formValue);
  formRef.reset();
  localStorage.removeItem('feedback-form-state');
};

