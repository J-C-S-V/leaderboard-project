import './index.scss';

console.log('Hello World!');

// My game
const gameId = 'JANudAkE59i9uvoF85MJ';

const name = document.querySelector('.form__element--name');
const score = document.querySelector('.form__element--score');
const formSubmitButton = document.querySelector('.form__button');

formSubmitButton.addEventListener('click', () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ user: name.value, score: score.value }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    options
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

fetch(
  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log('Este es el nombre: ', name.value);
console.log('Este es el score: ', score.value);
