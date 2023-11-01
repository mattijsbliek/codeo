import timer from './timer';

let timerEl = document.querySelector('.timer span');
let buttonEl = document.querySelector('button');
let scoreEl = document.querySelector('.score');
let resetEl = document.querySelector('.reset');

let initialScoreMessage = scoreEl.textContent;

let score = 0;
let initialTime = 10;

timer.set(initialTime);

timer.onUpdate((secondsLeft) => {
  timerEl.textContent = secondsLeft;
});

timer.onComplete(() => {
  buttonEl.disabled = true;
  resetEl.classList.remove('is-hidden');
});

buttonEl.addEventListener('click', () => {
  if (!timer.isRunning) {
    timer.start();
    timerEl.textContent = initialTime;
    timerEl.parentElement.classList.remove('is-hidden');
    hasStarted = true;
  }

  score += 1;
  scoreEl.textContent = `Score: ${score} kliks`
});

resetEl.addEventListener('click', () => {
  score = 0;
  timer.reset();
  buttonEl.disabled = false;
  resetEl.classList.add('is-hidden');
  scoreEl.textContent = initialScoreMessage;
  timerEl.textContent = initialTime;
  timerEl.parentElement.classList.add('is-hidden');
});