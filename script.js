// Set up variables
let currentLocation = "forest";
let choices = "What would you like to do?";
let result = "";
let health = 100;
let strength = 10;
let gold = 0;

const resetBtn = document.getElementById("resetBtn");

function showResetButton() {
  resetBtn.style.display = "block";
}

function resetGame() {
  // Reset all variables to their initial values
  health = 100;
  strength = 10;
  gold = 0;
  
  // Update the game UI
  updateGame();
}

function explore() {
  let randomNum = Math.floor(Math.random() * 8);
  if (randomNum === 0) {
    result = "You found a treasure chest! You gained 10 gold.";
    gold += 10;
  } else if (randomNum >= 1 && randomNum <= 2) {
    let enemyType = "goblin";
    let enemyHealth = 20;
    let enemyStrength = 5;
    result = "You encountered a " + enemyType + "!";
    result += " Battle ensues...";
    while (health > 0 && enemyHealth > 0) {
      enemyHealth -= strength;
      if (enemyHealth <= 0) {
        result += "<br>You defeated the " + enemyType + " and gained 5 gold.";
        gold += 5;
      } else {
        health -= enemyStrength;
        result += "<br>The " + enemyType + " hits you. Your health is now " + health + ".";
      }
    }
  } else if (randomNum >= 3 && randomNum <= 4) {
    let enemyType = "skeleton";
    let enemyHealth = 30;
    let enemyStrength = 10;
    result = "You encountered a " + enemyType + "!";
    result += " Battle ensues...";
    while (health > 0 && enemyHealth > 0) {
      enemyHealth -= strength;
      if (enemyHealth <= 0) {
        result += "<br>You defeated the " + enemyType + " and gained 10 gold.";
        gold += 10;
      } else {
        health -= enemyStrength;
        result += "<br>The " + enemyType + " hits you. Your health is now " + health + ".";
      }
    }
  } else if (randomNum === 5) {
    let enemyType = "sorcerer";
    let enemyHealth = 40;
    let enemyStrength = Math.floor(Math.random() * 5) + 1; // Enemy strength can be 1-5
    result = "You encountered a " + enemyType + "!";
    result += " Battle ensues...";
    while (health > 0 && enemyHealth > 0) {
      enemyHealth -= strength;
      if (enemyHealth <= 0) {
        result += "<br>You defeated the " + enemyType + " and gained 15 gold.";
        gold += 15;
      } else {
        health -= enemyStrength;
        if (strength - enemyStrength >= 10) {
          strength -= enemyStrength;
          result += "<br>The " + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength is now " + strength + ".";
        } else {
          strength = 10;
          result += "<br>The " + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength cannot go below 10. Your strength is now 10.";
        } 
      } 
    } 
  } else if (randomNum === 6) {
    let enemyType = "dragon";
    let enemyHealth = 50;
    let enemyStrength = 20;
    result = "You encountered a " + enemyType + "!";
    result += " Battle ensues...";
    while (health > 0 && enemyHealth > 0) {
    enemyHealth -= strength;
    if (enemyHealth <= 0) {
    result += "<br>You defeated the " + enemyType + " and gained 20 gold.";
    gold += 20;
    } else {
    health -= enemyStrength;
    if (strength - enemyStrength >= 10) {
    strength -= enemyStrength;
    result += "<br>The " + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength is now " + strength + ".";
    } else {
    strength = 10;
    result += "<br>The " + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength cannot go below 10. Your strength is now 10.";
    }
    }
    }
    } else if (randomNum === 7) {
      let enemyType = "Lord Anti-Hero";
      let enemyHealth = 80;
      let enemyStrength = 15;
      result = "You encountered " + enemyType + "!";
      result += " Battle ensues...";
      while (health > 0 && enemyHealth > 0) {
      enemyHealth -= strength;
      if (enemyHealth <= 0) {
      result += "<br>You defeated " + enemyType + " and saved another kingdom!";
      result += "<br>You gained 100 gold and 50 health.";
      gold += 100;
      health += 50;
      } else {
      health -= enemyStrength;
      if (strength - enemyStrength >= 10) {
      strength -= enemyStrength;
      result += "<br>" + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength is now " + strength + ".";
      } else {
      strength = 10;
      result += "<br>" + enemyType + " hits you and lowers your strength by " + enemyStrength + ". Your strength cannot go below 10. Your strength is now 10.";
      }
      }
      }
      }
  
  // Random gift
  let giftNum = Math.floor(Math.random() * 3);
  if (giftNum === 0) {
    result += "<br>You found a health potion! Your health increased by 10.";
    health += 10;
  } else if (giftNum === 1) {
    result += "<br>You found a strength potion! Your strength increased by 5.";
    strength += 5;
  } else {
    result += "<br>You found a bag of gold! You gained 15 gold.";
    gold += 15;
  }
  
  updateGame();
}


// Function to rest and gain health
function rest() {
  let restCost = Math.floor(Math.random() * 20) + 1;
  if (gold >= restCost) {
    health += 10;
    gold -= restCost;
    result = `You paid ${restCost} gold to rest and gain 10 health. Your health is now ${health}.`;
    
    // Chance for NPC events
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      result += " While resting, you meet a friendly traveler who gives you 5 gold.";
      gold += 5;
    } else if (randomNum === 1) {
      result += " While resting, you encounter a hostile thief who steals 10 gold from you.";
      gold -= 10;
    } else {
      result += " While resting, you find a lost child who rewards you with a health potion.";
      health++;
    }
    
  } else {
    result = "You don't have enough gold to rest.";
  }
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
    return;
  }

  // Update choices based on current location and health
  if (currentLocation === "forest") {
    if (health < 50) {
      choices = "You are injured and need to rest. What would you like to do?";
    } else {
      choices = "You are in the forest. What would you like to do?";
    }
  } else if (currentLocation === "desert") {
    if (health < 50) {
      choices = "You are injured and need to rest. What would you like to do?";
    } else {
      choices = "You are in the desert. What would you like to do?";
    }
  } else if (currentLocation === "mountain") {
    if (health < 50) {
      choices = "You are injured and need to rest. What would you like to do?";
    } else {
      choices = "You are in the mountains. What would you like to do?";
    }
  } else {
    if (health < 50) {
      choices = "You are injured and need to rest. What would you like to do?";
    } else {
      choices = "You are at the beach. What would you like to do?";
    }
  }
}

// Call updateGame function to initialize the game
updateGame();

