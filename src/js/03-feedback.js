const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

function saveFormData(event) {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function restoreFormData() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

document.addEventListener('DOMContentLoaded', restoreFormData);

form.addEventListener(
  'input',
  throttle(saveFormData, 500, { leading: false, trailing: true })
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  if (formData.email.trim() !== '' && formData.message.trim() !== '') {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';
  } else {
    alert('Будь ласка, заповніть обидва поля форми перед відправленням.');
  }
});
