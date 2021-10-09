const startGame = document.querySelector('.starting-the-game')
const howToPlay = document.querySelector('.how-to-play')
const about = document.querySelector('.about')
const startScreen = document.querySelector('.startScreen')
const characterSelectionScreen = document.querySelector('.characterSelectScreen')
const information = document.querySelector('.information')


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
    console.log(informationContent)

    if(informationContent === true){
        information.removeChild(information.firstChild)
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'"
        information.appendChild(howToParagraph)
    } else if (informationContent === false){
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "This is a project game made by Reisli Hysa! This was project one of General Assembly's SEI curriculumn where I decided to challenge myself and make an old fashioned pokemon battling aesthetic as my game. The aim was to use and create many different techniques aquired within my first few weeks of learning to develop a functional good game. Hope you enjoy! Look at my portfolio at 'not made yet :P'"
        information.appendChild(howToParagraph)
        console.log(howToParagraph)

    }
}

startGame.addEventListener('click', characterSelectScreen)
howToPlay.addEventListener('click', howToFunction)
about.addEventListener('click', aboutFunction)