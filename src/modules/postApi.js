const user = document.querySelector('.form__element--name');
const score = document.querySelector('.form__element--score');
const gameId = 'JANudAkE59i9uvoF85MJ';

// POST data to API

const postData = () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ user: user.value, score: score.value }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    options
  )
    .then((response) => response.json())
    .then((data) =>
      data && data.result ? alert(JSON.stringify(data.result)) : null
    );
};

export default postData;
