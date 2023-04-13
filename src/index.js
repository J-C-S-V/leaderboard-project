import './index.scss';
import postData from './modules/postApi.js';
import fetchData from './modules/getApi.js';

const refreshButton = document.querySelector('.main__button');
const formSubmitButton = document.querySelector('.form__button');

formSubmitButton.addEventListener('click', postData);
refreshButton.addEventListener('click', fetchData);
