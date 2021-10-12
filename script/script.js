const startGame = document.querySelector('.starting-the-game')
const howToPlay = document.querySelector('.how-to-play')
const about = document.querySelector('.about')
const startScreen = document.querySelector('.startScreen')
const characterSelectionScreen = document.querySelector('.characterSelectScreen')
const information = document.querySelector('.information')
let computerLifeBar = document.querySelector('#computer-life')
let playerLifeBar = document.querySelector('#player-life')
let playerlifeValue = document.querySelector('.player-hp')
let computerlifeValue = document.querySelector('.cpu-hp')
const attackChoice = document.querySelector('.attack-content')
const itemChoice = document.querySelector('.items')
const itemChoices = document.querySelectorAll('.items p')
const attackClicked = document.querySelector('.choices .attack')
const itemClicked = document.querySelector('.choices .item')
const ending = document.querySelector('.ending')
const endingH2 = document.querySelector('.ending h2')
const arrowRight = document.querySelectorAll('.arrows div')
const mainList = document.querySelectorAll('.main-menu li')
const outcome = document.querySelector('.decisions h3')

let startingScreen = true


function opacity() {
    arrowRight[0].classList.toggle('opacity')
}
function opacityTwo() {
    arrowRight[1].classList.toggle('opacity')
}
function opacityThree() {
    arrowRight[2].classList.toggle('opacity')
}

mainList[0].addEventListener('mouseover', opacity)
mainList[0].addEventListener('mouseout', opacity)
mainList[1].addEventListener('mouseover', opacityTwo)
mainList[1].addEventListener('mouseout', opacityTwo)
mainList[2].addEventListener('mouseover', opacityThree)
mainList[2].addEventListener('mouseout', opacityThree)


function attackHidden(){
    if(!itemChoice.classList.contains('hidden')){
        itemChoice.classList.add('hidden')
    }
    attackChoice.classList.toggle('hidden')

}
function itemHidden(){
    if(!attackChoice.classList.contains('hidden')){
        attackChoice.classList.add('hidden')
    }
    itemChoice.classList.toggle('hidden')

}

attackClicked.addEventListener('click', attackHidden)
itemClicked.addEventListener('click', itemHidden)



function characterSelectScreen() { 
    startScreen.classList.add('hidden')
    characterSelectionScreen.classList.remove('hidden')

}

function howToFunction() {
    let informationContent = information.hasChildNodes()

    if(informationContent === true){
        information.removeChild(information.firstChild)
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = 'Hello! The rules are simple! Beat the oponent CPU with the moves and items that you have at your disposal! Each character chosen has different stats and do different damage so take that into account when choosing your pet to battle. When choosing your characters you can use the arrow keys to move around and enter to confirm. Or just use the good old fashioned mouse to click and select when playing. Good Luck!'
        information.appendChild(howToParagraph)
    } else if (informationContent === false){
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = 'Hello! The rules are simple! Beat the oponent CPU with the moves and items that you have at your disposal! Each character chosen has different stats and do different damage so take that into account when choosing your pet to battle. When choosing your characters you can use the arrow keys to move around and enter to confirm. Or just use the good old fashioned mouse to click and select when playing. Good Luck!'
        information.appendChild(howToParagraph)
    }
}

function aboutFunction() {
    let informationContent = information.hasChildNodes()

    if(informationContent === true){
        information.removeChild(information.firstChild)
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'"
        information.appendChild(howToParagraph)
    } else if (informationContent === false){
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'"
        information.appendChild(howToParagraph)

    }
}

// const arrowRight = document.querySelectorAll('.arrows div')

mainListArray = ['inactive', 'inactive', 'inactive']
mainListArrayOpacity = ['noshow', 'noshow', 'noshow']
//mainList

mainList.forEach((cell, i) => {
    cell.classList.add(mainListArray[i])
    cell.classList.add(mainListArrayOpacity[i])
  })

  const freeCells = Array.from(mainList).filter((cell) => {
    return cell.classList.contains('inactive')
  })

  const notShowingCells = Array.from(arrowRight).filter((cell) => {
      return cell.classList.contains('opacity')
  })

//initialise the active highlghting class

const starting = freeCells[0]
starting.classList.add('active')
const opacityStarting = notShowingCells[0]
opacityStarting.classList.add('show')

//storing the active position

let activeIndex = Array.from(mainList).indexOf(starting)
let opacityIndex = Array.from(arrowRight).indexOf(opacityStarting)

const handleArrowUpMenu = () => {
    const isPlayerOnTop = (activeIndex) => activeIndex === 0
    tryMovePlayer(-1, isPlayerOnTop)
  }

const handleArrowDownMenu = () => {
    const isPlayerOnBottom = (activeIndex) => activeIndex === 2
    tryMovePlayer(1, isPlayerOnBottom)
  }

const tryMovePlayer = (changeInIndex, isIndexAtLimit) => {
    if (isIndexAtLimit(activeIndex)) {
        return
    }

    const newIndex = activeIndex + changeInIndex

    const newCell = mainList[newIndex]
    const newCellOpacity = arrowRight[newIndex]

    mainList[activeIndex].classList.remove('active')
    newCell.classList.add('active')

    arrowRight[activeIndex].classList.remove('show')
    newCellOpacity.classList.add('show')

    activeIndex = newIndex
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            handleArrowUpMenu()
            break
        case 'ArrowDown':
            handleArrowDownMenu()
            break
            }
        })

function submission() {
    if (mainList[0].classList.contains('active')){
        characterSelectScreen()
    } else if(mainList[1].classList.contains('active')){
        howToFunction()
    } else{
        aboutFunction()
    }
}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        submission()
    }
})

startGame.addEventListener('click', characterSelectScreen)
howToPlay.addEventListener('click', howToFunction)
about.addEventListener('click', aboutFunction)