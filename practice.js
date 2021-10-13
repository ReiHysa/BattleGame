battleDecisions = document.querySelectorAll(".choice li");

BDArray = ["no", "no"];
//mainList

const AttIteVal = Array.from(battleDecisions).filter((cell) => {
  return cell.classList.contains("no");
});

//initialise the active highlghting class

const battleSelect = AttIteVal[0];
battleSelect.classList.add("yes");

//storing the active position

let cursorIndex = Array.from(battleDecisions).indexOf(battleSelect);

const handleArrowUp = () => {
  if (screenOne === true) {
    const isPlayerOnTop = (activeIndex) => activeIndex === 0;
    tryMovePlayer(-1, isPlayerOnTop);
  } else if (
    screenThree === true &&
    contentSelectionAttack === false &&
    contentSelectionItem === false
  ) {
    const cursorIsOnTop = (cursorIndex) => cursorIndex === 0;
    tryMoveCursor(-1, cursorIsOnTop);
  } else if (
    screenThree === true &&
    contentSelectionAttack === true &&
    contentSelectionItem === false
  ) {
  } else if (
    screenThree === true &&
    contentSelectionAttack === false &&
    contentSelectionItem === true
  ) {
  }
};

const handleArrowDown = () => {
  if (screenOne === true) {
    const isPlayerOnBottom = (activeIndex) => activeIndex === 2;
    tryMovePlayer(1, isPlayerOnBottom);
  } else if (screenThree === true) {
  } else if (
    screenThree === true &&
    contentSelectionAttack === false &&
    contentSelectionItem === false
  ) {
    const cursorIsOnBottom = (cursorIndex) => cursorIndex === 0;
    tryMoveCursor(1, cursorIsOnBottm);
  } else if (
    screenThree === true &&
    contentSelectionAttack === true &&
    contentSelectionItem === false
  ) {
  } else if (
    screenThree === true &&
    contentSelectionAttack === false &&
    contentSelectionItem === true
  ) {
  }
};

const tryMoveCursor = (changeInIndex, isIndexAtLimit) => {
  if (isIndexAtLimit(cursorIndex)) {
    return;
  }

  const newCursorIndex = cursorIndex + changeInIndex;

  const newCursor = battleDecisions[newCursorIndex];

  battleDecisions[cursorIndex].classList.remove("yes");
  newCursor.classList.add("yes");

  cursorIndex = newCursorIndex;
};
