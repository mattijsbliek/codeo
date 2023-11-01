import { createClient } from "@liveblocks/client";
import timer from './timer';

const game = document.querySelector(".game");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const iconWidth = 40;
const icons = {};
const iconPositions = {};
const fullWidth = document.documentElement.clientWidth - iconWidth;

let winner = null;
let hasStarted = false;

timer.set(3);

const client = createClient({
  publicApiKey: '[APIKEY]'
});

const { room, leave } = client.enterRoom("codeo", { initialPresence: {} });

start.addEventListener('click', () => {
  hasStarted = true;
  start.classList.add('hidden')
});

reset.addEventListener('click', () => {
  leave();
  location.reload();
});

room.subscribe("others", (others, event) => {
  let name = event?.user?.presence?.name;

  if (event.type === "enter" && !icons[name]) {
    const player = generatePlayer(name);

    game.appendChild(player);
  }

  if (event.type === "leave" && icons[name]) {
    // A user has left the room
    // event.user;
    const player = document.querySelector(`.player[data-name="${name}"]`);

    if (!player) {
      return;
    }

    game.removeChild(player);

    delete icons[name];
    delete iconPositions[name];
  }
});

room.subscribe("event", ({ event, user }) => {
  if (event.type === 'click' && !winner && hasStarted) {
    iconPositions[event.name] += 3;
    icons[event.name].style.transform = `translateX(${iconPositions[event.name]}px)`;

    if (iconPositions[event.name] >= fullWidth) {
      winner = event.name;
      hasStarted = false;

      document.querySelector('.winner').classList.add('is-active');
      document.querySelector('.winner span').textContent = winner;
    }
  }
});

function generatePlayer(name) {
  const player = document.createElement('div');
  player.className = 'player';
  player.dataset.name = name;

  const icon = document.createElement('div');
  icon.className = 'icon';
  icon.style.backgroundColor = randomColor();

  const nameElm = document.createElement('span');
  nameElm.className = 'name';
  nameElm.textContent = name;

  icon.appendChild(nameElm);

  icons[name] = icon;
  iconPositions[name] = 0;

  player.appendChild(icon);

  return player;
}

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}