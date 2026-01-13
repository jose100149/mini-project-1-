console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");



// OnClick Functions Here
const advanceBlue = () => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
};

const advancePink = () => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
};

const advanceBrown = () => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
};

// Check for a winner
const checkWinner = (position, color) => {
  if (position === 5) {
    alert(`${color} horse wins!`);
  }
};

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);

// this is just to show the end of the code//