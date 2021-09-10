'use strict';

const dateInput = document.querySelector('.birth-date');
const luckyNumber = document.querySelector('.lucky-number');
const btn = document.querySelector('.check-luck');
const body = document.querySelector('body');
const message = document.querySelector('.message');

const renderMessage = function () {
  const number = +luckyNumber.value;
  const dateArr = dateInput.value
    .replaceAll('-', '')
    .replaceAll('0', '')
    .split('');
  const sum = dateArr.reduce((acc, el) => acc + Number(el), 0);

  sum % number === 0
    ? (message.innerHTML = `Your birthday is lucky 🥳`)
    : (message.innerHTML = `Birthday not lucky 😢`);
};

btn.addEventListener('click', renderMessage);
