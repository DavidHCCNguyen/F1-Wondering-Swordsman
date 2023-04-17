// Set up variables
let currentLocation = "forest";
let choices = "What would you like to do?";
let result = "";
let health = 100;
let strength = 10;
let gold = 0;

// Function to explore current location
function explore() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    result = "You found a treasure chest! You gained 10 gold.";
    gold += 10;
  } else {
    result = "You didn't find anything on your exploration. Try again?";
  }
  updateGame();
}

// Function to rest and gain health
function rest() {
  health += 10;
  result = "You feel refreshed after your rest. Your health increased by 10.";
  updateGame();
}

// Function to travel to a new location
function travel() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    currentLocation = "desert";
    choices = "You arrived at the desert. What would you like to do?";
    result = "You survived the journey to the desert!";
  } else if (randomNum === 1) {
    currentLocation = "mountain";
    choices = "You arrived at the mountain. What would you like to do?";
    result = "You survived the journey to the mountain!";
  } else {
    currentLocation = "beach";
    choices = "You arrived at the beach. What would you like to do?";
    result = "You survived the journey to the beach!";
  }
  health -= 10;
  updateGame();
}

// Function to update the game screen
function updateGame() {
  document.getElementById("location").innerHTML = currentLocation;
  document.getElementById("choices").innerHTML = choices;
  document.getElementById("result").innerHTML = result;
  document.getElementById("health").innerHTML = health;
  document.getElementById("strength").innerHTML = strength;
  document.getElementById("gold").innerHTML = gold;
  
  // Check if player has died
  if (health <= 0) {
    result = "You have died. Game over!";
    document.getElementById("result").innerHTML = result;
    document.getElementById("buttons").innerHTML = "";
  }
}
