// Set up variables
let location = "forest";
let choices = "What would you like to do?";
let result = "";

// Function to explore current location
function explore() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    result = "You found some treasure!";
  } else if (randomNum === 1) {
    result = "You encountered a monster and defeated it!";
  } else {
    result = "You found nothing of interest.";
  }
  updateGame();
}

// Function to rest and restore health
function rest() {
  result = "You rest and restore some health.";
  updateGame();
}

// Function to travel to a new location
function travel() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    location = "mountains";
    result = "You have arrived at the mountains.";
  } else if (randomNum === 1) {
    location = "desert";
    result = "You have arrived at the desert.";
  } else {
    location = "ocean";
    result = "You have arrived at the ocean.";
  }
  updateGame();
}

// Function to update game display
function updateGame() {
  document.getElementById("location").innerHTML = "You are currently in the " + location + ".";
  document.getElementById("choices").innerHTML = choices;
  document.getElementById("result").innerHTML = result;
}

// Initial game setup
updateGame();
