import getRandomHole from "./random-hole.js";

console.log("##### Wack a mole #####");

/**
 * You can get a random hole using the getRandomHole() function, by calling it with the list of hole elements.
 */


// We have two selectors we can use to find our elements on a page
// querySelector will return the first element it finds
// querySelectorAll will return all the elements it finds
let holes = document.querySelectorAll(".hole");
let hammer = document.querySelector(".hammer");
let scoreEl = document.querySelector(".score span");
let score = 0;

function run() {
    // Get a random hole
    let hole = getRandomHole(holes);
    let timer = null;

    // Add the mole to that random hole
    let img = document.createElement("img");
    img.classList.add("mole");
    img.src = "assets/mole.png";

    img.addEventListener("click", () => {
        console.log("Whack!");
        score += 10;
        scoreEl.innerHTML = score;
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
        run();
    }, 2000);
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
