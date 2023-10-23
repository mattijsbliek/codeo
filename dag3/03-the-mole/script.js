console.log("##### Wack a mole #####");

// We have two selectors we can use to find our elements on a page
// querySelector will return the first element it finds
// querySelectorAll will return all the elements it finds
let holes = document.querySelectorAll(".hole");
let hammer = document.querySelector(".hammer");

function run() {
  // Get a random hole
  let hole = holes[Math.floor(Math.random() * holes.length)];
  console.log(hole);
}

run();

// Adding events
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
