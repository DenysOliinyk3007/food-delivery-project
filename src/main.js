const warningAccess = document.querySelector('.offers-hidden');
const inputAccess = document.querySelector('.offers-input');
const buttonSubscribe = document.querySelector('.offers-button');

inputAccess.addEventListener('input', () => {
  const valid =
    inputAccess.value.trim().includes('@') &&
    inputAccess.value.trim().includes('.') &&
    !inputAccess.value.trim().endsWith('.') &&
    inputAccess.value.trim().length > inputAccess.value.trim().indexOf('@');
  if (valid) {
    inputAccess.classList.remove('offers-input-error');
    inputAccess.classList.add('offers-input-right');
    warningAccess.classList.remove('offers-warning');
    warningAccess.classList.add('offers-hidden');
  } else {
    inputAccess.classList.remove('offers-input-default');
    inputAccess.classList.add('offers-input-error');
    warningAccess.classList.remove('offers-hidden');
    warningAccess.classList.add('offers-warning');
  }
});

buttonSubscribe.addEventListener('click', () => {
  if (inputAccess.value.trim() !== '') {
    const userEmail = inputAccess.value.trim();
    console.log(userEmail);
    inputAccess.value = '';
  } else {
    alert('The field is empty. Please provide your details.');
  }
});
