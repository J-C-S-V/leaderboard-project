import './index.scss';

const gameId = 'JANudAkE59i9uvoF85MJ';

const user = document.querySelector('.form__element--name');
const score = document.querySelector('.form__element--score');
const formSubmitButton = document.querySelector('.form__button');
const refreshButton = document.querySelector('.main__button');
const ul = document.querySelector('.ul');

// POST data to API
formSubmitButton.addEventListener('click', () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ user: user.value, score: score.value }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    options,
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// GET data from API
async function fetchData() {
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    );
    const data = await response.json();
    for (let i = 0; i < data.result.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;
      ul.appendChild(li);
    }
  } catch (error) {
    console.log(error);
  }
}

refreshButton.addEventListener('click', fetchData);
