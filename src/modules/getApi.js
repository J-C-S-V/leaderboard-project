const gameId = 'JANudAkE59i9uvoF85MJ';
const ul = document.querySelector('.ul');

// GET data from API
const fetchData = async () => {
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    );
    ul.innerHTML = '';
    const data = await response.json();
    for (let i = 0; i < data.result.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;
      ul.appendChild(li);
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
