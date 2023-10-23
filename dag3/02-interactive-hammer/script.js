console.log("##### Wack a mole #####");

// We have two selectors we can use to find our elements on a page
// querySelector will return the first element it finds
// querySelectorAll will return all the elements it finds
let holes = document.querySelectorAll(".hole");
let hole = document.querySelector(".hole");

// EVENTs
window.addEventListener("mousemove", (event) => {
  console.log("Move", event);
});

window.addEventListener("mousedown", (event) => {
  console.log("Click", event);
});
