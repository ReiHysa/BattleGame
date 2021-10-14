const startGame = document.querySelector(".starting-the-game");
const howToPlay = document.querySelector(".how-to-play");
const about = document.querySelector(".about");
const startScreen = document.querySelector(".startScreen");
const characterSelectionScreen = document.querySelector(
  ".characterSelectScreen"
);
const information = document.querySelector(".information");
let computerLifeBar = document.querySelector("#computer-life");
let playerLifeBar = document.querySelector("#player-life");
let playerlifeValue = document.querySelector(".player-hp");
let computerlifeValue = document.querySelector(".cpu-hp");
const attackChoice = document.querySelector(".attack-content");
const itemChoice = document.querySelector(".items");
const itemChoices = document.querySelectorAll(".items p");
const attackClicked = document.querySelector(".choices .attack");
const itemClicked = document.querySelector(".choices .item");
const ending = document.querySelector(".ending");
const endingH2 = document.querySelector(".ending h2");
const arrowRight = document.querySelectorAll(".arrows div");
const mainList = document.querySelectorAll(".main-menu li");
const outcome = document.querySelector(".decisions h3");
const battleDecisions = document.querySelectorAll(".choice li");
const attackMoves = document.querySelectorAll(".attack-content p");
const chosenCharacter = document.querySelector(".chosenCharacter");
const chosenCharacterText = document.querySelector(".chosenCharacter p");
const grid = document.querySelectorAll(".grid div");
const arrow = document.querySelectorAll("aside");
const battleScreen = document.querySelector(".battle");
const playerModel = document.querySelector(".character-model");
const computerModel = document.querySelector(".cpu-model");
const characterName = document.querySelector(".characterName");
const computerName = document.querySelector(".CpuName");

const baseDamage = [10, 13, 12, 20];

let screenOne = true;
let screenTwo = false;
let screenThree = false;
let sound = false;

let contentSelectionAttack = false;
let contentSelectionItem = false;

function opacity() {
  arrowRight[0].classList.toggle("opacity");
}
function opacityTwo() {
  arrowRight[1].classList.toggle("opacity");
}
function opacityThree() {
  arrowRight[2].classList.toggle("opacity");
}

mainList[0].addEventListener("mouseover", opacity);
mainList[0].addEventListener("mouseout", opacity);
mainList[1].addEventListener("mouseover", opacityTwo);
mainList[1].addEventListener("mouseout", opacityTwo);
mainList[2].addEventListener("mouseover", opacityThree);
mainList[2].addEventListener("mouseout", opacityThree);

function attackHidden() {
  if (!itemChoice.classList.contains("hidden")) {
    itemChoice.classList.add("hidden");
  }
  attackChoice.classList.toggle("hidden");
}
function itemHidden() {
  if (!attackChoice.classList.contains("hidden")) {
    attackChoice.classList.add("hidden");
  }
  itemChoice.classList.toggle("hidden");
}

attackClicked.addEventListener("click", attackHidden);
itemClicked.addEventListener("click", itemHidden);

function characterSelectScreen() {
  startScreen.classList.add("hidden");
  characterSelectionScreen.classList.remove("hidden");
}

function howToFunction() {
  let informationContent = information.hasChildNodes();

  if (informationContent === true) {
    information.removeChild(information.firstChild);
    const howToParagraph = document.createElement("p");
    howToParagraph.textContent =
      "Hello! The rules are simple! Beat the CPU with the moves and items that you have at your disposal! Each character chosen has different stats and do different damage so take that into account when choosing your pet to battle. When choosing your characters you can use the arrow keys to move around and enter to confirm. Or just use the good old fashioned mouse to click and select when playing. Good Luck!";
    information.appendChild(howToParagraph);
  } else if (informationContent === false) {
    const howToParagraph = document.createElement("p");
    howToParagraph.textContent =
      "Hello! The rules are simple! Beat the oponent CPU with the moves and items that you have at your disposal! Each character chosen has different stats and do different damage so take that into account when choosing your pet to battle. When choosing your characters you can use the arrow keys to move around and enter to confirm. Or just use the good old fashioned mouse to click and select when playing. Good Luck!";
    information.appendChild(howToParagraph);
  }
}

function aboutFunction() {
  let informationContent = information.hasChildNodes();

  if (informationContent === true) {
    information.removeChild(information.firstChild);
    const howToParagraph = document.createElement("p");
    howToParagraph.textContent =
      "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'";
    information.appendChild(howToParagraph);
  } else if (informationContent === false) {
    const howToParagraph = document.createElement("p");
    howToParagraph.textContent =
      "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'";
    information.appendChild(howToParagraph);
  }
}

mainListArray = ["inactive", "inactive", "inactive"];
mainListArrayOpacity = ["noshow", "noshow", "noshow"];
BDArray = ["no", "no"];
let AMoves = ["none", "none", "none", "none"];
let IMoves = ["none", "none", "none", "none"];
//mainList

//battleDecisions

mainList.forEach((cell, i) => {
  cell.classList.add(mainListArray[i]);
  cell.classList.add(mainListArrayOpacity[i]);
});

battleDecisions.forEach((cell, i) => {
  cell.classList.add(BDArray[i]);
});
attackMoves.forEach((cell, i) => {
  cell.classList.add(AMoves[i]);
});
itemChoices.forEach((cell, i) => {
  cell.classList.add(IMoves[i]);
});

const freeCells = Array.from(mainList).filter((cell) => {
  return cell.classList.contains("inactive");
});

const notShowingCells = Array.from(arrowRight).filter((cell) => {
  return cell.classList.contains("opacity");
});

const AttIteVal = Array.from(battleDecisions).filter((cell) => {
  return cell.classList.contains("no");
});

const AttVal = Array.from(attackMoves).filter((cell) => {
  return cell.classList.contains("none");
});

const IteVal = Array.from(itemChoices).filter((cell) => {
  return cell.classList.contains("none");
});
//initialise the active highlghting class

const starting = freeCells[0];
starting.classList.add("active");
const opacityStarting = notShowingCells[0];
opacityStarting.classList.add("show");
const battleSelect = AttIteVal[0];
battleSelect.classList.add("yes");
const attackSelect = AttVal[0];
attackSelect.classList.add("moveHover");
battleSelect.classList.add("yes");
const itemSelect = IteVal[0];
attackSelect.classList.add("moveHover");

//storing the active position

let activeIndex = Array.from(mainList).indexOf(starting);
let opacityIndex = Array.from(arrowRight).indexOf(opacityStarting);
let cursorIndex = Array.from(battleDecisions).indexOf(battleSelect);
let moveIndex = Array.from(attackMoves).indexOf(attackSelect);
let itemIndex = Array.from(itemChoices).indexOf(itemSelect);

const handleArrowUp = () => {
  if (screenOne === true) {
    const isPlayerOnTop = (activeIndex) => activeIndex === 0;
    tryMovePlayer(-1, isPlayerOnTop);
  } else if (
    screenOne === false &&
    contentSelectionAttack == false &&
    contentSelectionItem == false
  ) {
    const cursorIsOnTop = (cursorIndex) => cursorIndex === 0;
    tryMoveCursor(-1, cursorIsOnTop);
  }
};

const handleArrowDown = () => {
  if (screenOne === true) {
    const isPlayerOnBottom = (activeIndex) => activeIndex === 2;
    tryMovePlayer(1, isPlayerOnBottom);
  } else if (
    screenOne === false &&
    contentSelectionAttack === false &&
    contentSelectionItem === false
  ) {
    const cursorIsOnBottom = (cursorIndex) => cursorIndex === 1;
    tryMoveCursor(1, cursorIsOnBottom);
  }
};

const tryMoveAttack = (change, limit) => {
  if (limit(moveIndex)) {
    return;
  }

  const newMoveIndex = moveIndex + change;

  const newMove = attackMoves[newMoveIndex];

  attackMoves[moveIndex].classList.remove("moveHover");
  newMove.classList.add("moveHover");

  moveIndex = newMoveIndex;
};

const tryMoveItem = (change, limit) => {
  if (limit(itemIndex)) {
    return;
  }

  const newItemIndex = itemIndex + change;

  const newItem = itemChoices[newItemIndex];

  itemChoices[itemIndex].classList.remove("moveHover");
  newItem.classList.add("moveHover");

  itemIndex = newItemIndex;
};

const tryMovePlayer = (changeInIndex, isIndexAtLimit) => {
  if (isIndexAtLimit(activeIndex)) {
    return;
  }

  const newIndex = activeIndex + changeInIndex;

  const newCell = mainList[newIndex];
  const newCellOpacity = arrowRight[newIndex];

  mainList[activeIndex].classList.remove("active");
  newCell.classList.add("active");

  arrowRight[activeIndex].classList.remove("show");
  newCellOpacity.classList.add("show");

  activeIndex = newIndex;
};

const tryMoveCursor = (change, limit) => {
  if (limit(cursorIndex)) {
    return;
  }

  const newCursorIndex = cursorIndex + change;

  const newCursor = battleDecisions[newCursorIndex];

  battleDecisions[cursorIndex].classList.remove("yes");
  newCursor.classList.add("yes");

  cursorIndex = newCursorIndex;
};

function submission() {
  if (mainList[0].classList.contains("active")) {
    characterSelectScreen();
    screenOne = false;
    screenTwo = true;
  } else if (mainList[1].classList.contains("active")) {
    howToFunction();
  } else {
    aboutFunction();
  }
}

function characterInDisplay() {
  if (grid[0].classList.contains("hover")) {
    if (chosenCharacter.classList.contains("character-option-cat")) {
      chosenCharacter.classList.remove("character-option-cat");
    } else if (chosenCharacter.classList.contains("character-option-turtle")) {
      chosenCharacter.classList.remove("character-option-turtle");
    } else if (chosenCharacter.classList.contains("character-option-snake")) {
      chosenCharacter.classList.remove("character-option-snake");
    }
    chosenCharacter.classList.add("character-option-dog");
    chosenCharacterText.textContent = "Water Dog";
  } else if (grid[1].classList.contains("hover")) {
    if (chosenCharacter.classList.contains("character-option-dog")) {
      chosenCharacter.classList.remove("character-option-dog");
    } else if (chosenCharacter.classList.contains("character-option-turtle")) {
      chosenCharacter.classList.remove("character-option-turtle");
    } else if (chosenCharacter.classList.contains("character-option-snake")) {
      chosenCharacter.classList.remove("character-option-snake");
    }
    chosenCharacter.classList.add("character-option-cat");
    chosenCharacterText.textContent = "Flaming Cat";
  } else if (grid[2].classList.contains("hover")) {
    if (chosenCharacter.classList.contains("character-option-dog")) {
      chosenCharacter.classList.remove("character-option-dog");
    } else if (chosenCharacter.classList.contains("character-option-turtle")) {
      chosenCharacter.classList.remove("character-option-turtle");
    } else if (chosenCharacter.classList.contains("character-option-cat")) {
      chosenCharacter.classList.remove("character-option-cat");
    }
    chosenCharacter.classList.add("character-option-snake");
    chosenCharacterText.textContent = "Venomous Snake";
  } else if (grid[3].classList.contains("hover")) {
    if (chosenCharacter.classList.contains("character-option-dog")) {
      chosenCharacter.classList.remove("character-option-dog");
    } else if (chosenCharacter.classList.contains("character-option-cat")) {
      chosenCharacter.classList.remove("character-option-cat");
    } else if (chosenCharacter.classList.contains("character-option-snake")) {
      chosenCharacter.classList.remove("character-option-snake");
    }
    chosenCharacter.classList.add("character-option-turtle");
    chosenCharacterText.textContent = "Lazy Turtle";
  }
}

const openingMusic = document.getElementById("opening");
const battleMusic = document.getElementById("battle-music");
const victoryMusic = document.getElementById("victory-music");
const lostMusic = document.getElementById("healing-music");

function onLoad() {
  if (screenOne === true || screenTwo === true) {
    openingMusic.play();
  } else if (screenOne === false && screenTwo === false && sound === false) {
    openingMusic.pause();
    battleMusic.play();
  } else if (sound === true) {
    battleMusic.pause();
  }
}

window.addEventListener("click", onLoad);

startGame.addEventListener("click", characterSelectScreen);
howToPlay.addEventListener("click", howToFunction);
about.addEventListener("click", aboutFunction);
