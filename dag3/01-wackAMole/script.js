/*
We gaan het vierkantje van gister bewegen met de toetsen op je keyboard. Dit lijkt een beetje
op wat we gister gemaakt hebben met het klikken van de muis.

Hiervoor hebben we nodig:
- Query selector om het rode vierkant te selecteren
- Een event listener om naar te luisteren wanneer je op een toets drukt
- Een stukje style om het rode rode vierkant te verplaatsen

Bonus: 
- Zet het vierkant elke keer dat je op enter drukt terug in de linker bovenhoek
- Maak van het vierkant een rechthoek, en draai het 90 graden elke keer dat je op spatie drukt
*/
// let vierkant = document.querySelector(".box");
// vierkant.style.bottom = "50%";
// vierkant.style.left = "50%";

// document.addEventListener("keydown", drukOpToets);

// function drukOpToets(event) {
//   if (
//     (event.key === "ArrowRight" || event.key === "d") &&
//     !raaktDeMuur(event)
//   ) {
//     vierkant.style.left = parseInt(vierkant.style.left) + 7 + "%";
//   }

//   if (event.key === "ArrowLeft" || event.key === "a") {
//     vierkant.style.left = parseInt(vierkant.style.left) - 7 + "%";
//   }

//   if (event.key === "ArrowUp" || event.key === "w") {
//     vierkant.style.bottom = parseInt(vierkant.style.bottom) + 7 + "%";
//   }

//   if (event.key === "ArrowDown" || event.key === "s") {
//     vierkant.style.bottom = parseInt(vierkant.style.bottom) - 7 + "%";
//   }
// }

// function raaktDeMuur(vierkant, event) {
//   console.log(window.width);
//   if (parseInt(vierkant.style.left) > window.width) {
//     return true;
//   }
// }
// https://www.youtube.com/watch?v=b20YueeXwZg
// ~ at 00:10:00
const hammer = document.querySelector(".hammer");

window.addEventListener("mousemove", (event) => {
  hammer.style.left = event.pageX + "px";
  hammer.style.top = event.pageY + "px";
});

window.addEventListener("mousedown", (event) => {
  hammer.classList.add("active");
});

window.addEventListener("mouseup", (event) => {
  hammer.classList.remove("active");
});
