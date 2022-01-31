// const Typed = require('typed.min.js');

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('#header .description span', options);


document.addEventListener('DOMContentLoaded', (e) => {
  displayIntroNouns()
});

function displayIntroNouns() {
  const introNounsEl = document.querySelector('#header .description span')
  const typingInterval = 150;
  const nouns = ['Software Engineer', 'Artist', 'Story Lover'];

  let currIdx = 0;

  setInterval(() => {
    if (document.hasFocus() && elIsOnScreen(introNounsEl)) {

      deleteWord(introNounsEl);
      setTimeout(() => {
        currIdx = (currIdx + 1) % nouns.length;
        typeWord(introNounsEl, nouns[currIdx]);
      }, typingInterval * introNounsEl.innerText.length);
    }
  }, 5000);
}

function deleteWord(el) {
  const intervalId = setInterval(() => {
    const innerText = el.innerText;

    if (innerText.length === 0) {
      clearInterval(intervalId);
    } else {
      el.innerText = innerText.slice(0, innerText.length - 1);
    }
  }, 75)
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

function elIsOnScreen(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}