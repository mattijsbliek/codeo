import { createClient } from '@supabase/supabase-js';
import timer from './timer';

const SUPABASE_URL = 'https://rvyburmmzmficbdcukgx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_k0atUdKat3rhKTZzjViTDw_ija8yVZO';
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

const game = document.querySelector(".game");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const iconWidth = 40;
const icons = {};
const iconPositions = {};
const fullWidth = document.documentElement.clientWidth - iconWidth;

let winner = null;
let hasStarted = false;

start.addEventListener('click', () => {
  hasStarted = true;
  start.classList.add('hidden')
});

reset.addEventListener('click', () => {
  leave();
  location.reload();
});

timer.set(3);

const room = client.channel("codeo");

room
  .on("presence", {
    event: "join",
  }, ({ key: name, newPresences }) => {

    if (!icons[name]) {
      const player = generatePlayer(name);

      game.appendChild(player);
    }
  })
  .on("presence", {
    event: "leave",
  }, ({ key: name, leftPresences }) => {
    if (icons[name]) {
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
  })
  .on("broadcast", {
    event: "click",
  }, ({ payload }) => {
    if (!winner && hasStarted) {
      iconPositions[payload.name] += 3;
      icons[payload.name].style.transform = `translateX(${iconPositions[payload.name]}px)`;

      if (iconPositions[payload.name] >= fullWidth) {
        winner = payload.name;
        hasStarted = false;

        document.querySelector('.winner').classList.add('is-active');
        document.querySelector('.winner span').textContent = winner;
      }
    }
  })
  .subscribe();

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