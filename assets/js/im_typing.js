// const Typed = require('typed.min.js');

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('#header .description span', options);


document.addEventListener('DOMContentLoaded', (e) => {
  var noun = document.querySelector('#header .description span')
  displayIntroNouns(noun)
});

function displayIntroNouns(el) {
  const typingInterval = 150;
  const nouns = ['Software Engineer', 'Artist', 'Learner'];
  let currIdx = 0;

  setInterval(() => {
    if (document.hasFocus()) {
      deleteWord(el);
      setTimeout(() => {
        currIdx = (currIdx + 1) % nouns.length;
        typeWord(el, nouns[currIdx]);
      }, typingInterval * el.innerText.length);
    }
  }, 6000);
}

function deleteWord(el) {
  const intervalId = setInterval(() => {
    const innerText = el.innerText;

    if (innerText.length === 0) {
      clearInterval(intervalId);
    } else {
      el.innerText = innerText.slice(0, innerText.length - 1);
    }
  }, 150)
}

function typeWord(el, word) {
  const newWord = el.innerText + word;
  let letterIdx = 1;

  const intervalId = setInterval(() => {
    if (letterIdx - 1 === newWord.length)
      clearInterval(intervalId);

    el.innerText = newWord.slice(0, letterIdx++);
  }, 150)
}