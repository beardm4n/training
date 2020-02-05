import './style.css';

const form = document.getElementById('form');

// для того, чтобы не делать запрос к input и button по всему document, обратимся к form
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
   event.preventDefault(); // отменяем поведение по умолчанию, в данном случае - обновление страницы
   console.warn(input.value);
}
