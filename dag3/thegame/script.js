let hammer = document.querySelector(".hammer");
let holes = document.querySelectorAll(".hole");
let field = document.querySelector(".field");
let scoreEl = document.querySelector(".score span");
let timerEl = document.querySelector(".timer span");
const sound = new Audio("assets/smash.mp3");

// Base game config
const config = {
  // Game duration in seconds
  gameDuration: 30,
  // Time between moles in milliseconds
  timeBetweenMoles: 1000,
};

// Game state
let gameOver = false;
let timeBeforeNextMole = config.timeBetweenMoles;
let score = 0;
let timer = config.gameDuration;

function countdown() {
  let seconds = timer;

  if (seconds == 0) {
    clearTimeout(timer);
    return;
  } else {
    seconds--;
  }

  timer = `${seconds < 10 ? "0" + seconds : seconds}`;
  timerEl.textContent = timer;
  setTimeout(countdown, 1000);

  // Increase difficulty
  timeBeforeNextMole -= 7;

  // Game over
  if (seconds == 0) {
    gameOver = true;
    field.classList.add("game-over");
    // Re-enable start
    startButton.removeAttribute("disabled");
  }
}

function run() {
  let hole = holes[Math.floor(Math.random() * holes.length)];
  let timer = null;
  let img = document.createElement("img");
  img.classList.add("mole");
  img.src = "assets/mole.png";

  img.addEventListener("click", () => {
    score += 10;
    sound.play();
    scoreEl.textContent = score;

    img.src = "assets/mole-whacked.png";
    clearTimeout(timer);

    setTimeout(() => {
      hole.removeChild(img);
      run();
    }, 500);
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    if (!gameOver) {
      run();
    }
  }, timeBeforeNextMole);
}

function startGame() {
  // Reset game
  field.classList.remove("game-over");
  gameOver = false;
  scoreEl.textContent = 0;
  timeBeforeNextMole = config.timeBetweenMoles;
  timer = config.gameDuration;
  // Start the game
  run();
  countdown();
  // Avoid extra clicks on the start button
  startButton.setAttribute("disabled", true);
}

// Event listeners
// These are connections between the user and the program
const startButton = document.querySelector(".start");
startButton.addEventListener("mouseup", startGame);

// excersse 2:
// These make the hammer follow the mouse
document.addEventListener("mousemove", (event) => {
  hammer.style.left = event.pageX + "px";
  hammer.style.top = event.pageY + "px";
});

window.addEventListener("mousedown", (event) => {
  hammer.classList.add("active");
});

window.addEventListener("mouseup", (event) => {
  hammer.classList.remove("active");
});
