const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
