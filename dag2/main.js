import audioPlayer from './audio-player.js';

let samples = [
  'kick',
  'snare',
  'clap',
  'hi-hat',
  'tom-low',
  'tom-mid',
  'tom-high',
  'rimshot',
  'cowbell'
];

for (let sample of samples) {
  await audioPlayer.load(sample);

  let button = document.querySelector(`.${sample}`);

  button.addEventListener('click', e => {
    e.preventDefault();

    audioPlayer.play(sample);
  });
};

document.addEventListener('keydown', e => {
  if (e.metaKey) {
    return;
  }

  if (e.key === "1") {
    audioPlayer.play(samples[0]);
  } else if (e.key === "2") {
    audioPlayer.play(samples[1]);
  } else if (e.key === "3") {
    audioPlayer.play(samples[2]);
  } else if (e.key === "4") {
    audioPlayer.play(samples[3]);
  } else if (e.key === "5") {
    audioPlayer.play(samples[4]);
  } else if (e.key === "6") {
    audioPlayer.play(samples[5]);
  } else if (e.key === "7") {
    audioPlayer.play(samples[6]);
  } else if (e.key === "8") {
    audioPlayer.play(samples[7]);
  }
});