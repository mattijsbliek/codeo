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
