import './index.scss';

console.log('Hello World!');

const options = {
  method: 'POST',
  body: JSON.stringify({ name: 'Mario bross' }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
  options
)
  .then((response) => response.json())
  .then((data) => {
    // Extract the game ID from the response
    const gameID = data.result.split(': ')[1].slice(0, -7);
    console.log(data);
    console.log(gameID);
  });
