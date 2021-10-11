const chosenCharacter = document.querySelector('.chosenCharacter')
const chosenCharacterText = document.querySelector('.chosenCharacter p')
const grid = document.querySelectorAll('.grid div')
const arrow = document.querySelectorAll('aside')
const battleScreen = document.querySelector('.battle')
const playerModel = document.querySelector('.character-model')
const computerModel = document.querySelector('.cpu-model')
const characterName = document.querySelector('.characterName')
const computerName = document.querySelector('.CpuName')
const attackMoves = document.querySelectorAll('.attack-content p')

const baseDamage = [10, 13, 12, 20]


function dogHover(){
    arrow[0].classList.toggle('opacity')
    if (chosenCharacter.classList.contains('character-option-cat')){
        chosenCharacter.classList.remove('character-option-cat')
    } else if (chosenCharacter.classList.contains('character-option-turtle')){
        chosenCharacter.classList.remove('character-option-turtle')

    }else if (chosenCharacter.classList.contains('character-option-snake')){
        chosenCharacter.classList.remove('character-option-snake')

    }
    chosenCharacter.classList.add('character-option-dog')
    chosenCharacterText.textContent = 'Dog'
}
function dogHoverNo(){
    arrow[0].classList.toggle('opacity')
}
function catHover(){
    arrow[1].classList.toggle('opacity')
    if (chosenCharacter.classList.contains('character-option-dog')){
        chosenCharacter.classList.remove('character-option-dog')
    } else if (chosenCharacter.classList.contains('character-option-turtle')){
        chosenCharacter.classList.remove('character-option-turtle')

    }else if (chosenCharacter.classList.contains('character-option-snake')){
        chosenCharacter.classList.remove('character-option-snake')

    }
    chosenCharacter.classList.add('character-option-cat')
    chosenCharacterText.textContent = 'Cat'
}
function catHoverNo(){
    arrow[1].classList.toggle('opacity')
}
function turtleHover(){
    arrow[3].classList.toggle('opacity')
    if (chosenCharacter.classList.contains('character-option-dog')){
        chosenCharacter.classList.remove('character-option-dog')
    } else if (chosenCharacter.classList.contains('character-option-cat')){
        chosenCharacter.classList.remove('character-option-cat')

    }else if (chosenCharacter.classList.contains('character-option-snake')){
        chosenCharacter.classList.remove('character-option-snake')

    }
    chosenCharacter.classList.add('character-option-turtle')
    chosenCharacterText.textContent = 'Turtle'
}
function turtleHoverNo(){
    arrow[3].classList.toggle('opacity')
}
function snakeHover(){
    arrow[2].classList.toggle('opacity')
    if (chosenCharacter.classList.contains('character-option-dog')){
        chosenCharacter.classList.remove('character-option-dog')
    } else if (chosenCharacter.classList.contains('character-option-turtle')){
        chosenCharacter.classList.remove('character-option-turtle')

    }else if (chosenCharacter.classList.contains('character-option-cat')){
        chosenCharacter.classList.remove('character-option-cat')

    }
    chosenCharacter.classList.add('character-option-snake')
   chosenCharacterText.textContent = 'Snake'
}
function snakeHoverNo(){
    arrow[2].classList.toggle('opacity')
}

grid[0].addEventListener('mouseover', dogHover)
grid[0].addEventListener('mouseout', dogHoverNo)
grid[1].addEventListener('mouseover', catHover)
grid[1].addEventListener('mouseout', catHoverNo)
grid[3].addEventListener('mouseover', turtleHover)
grid[3].addEventListener('mouseout', turtleHoverNo)
grid[2].addEventListener('mouseover', snakeHover)
grid[2].addEventListener('mouseout', snakeHoverNo)

class Pet{
    constructor(attack, defence, hitPoints, speed){
        this.attack = attack
        this.defence = defence
        this.hitPoints = hitPoints
        this.speed = speed
    }
}

let characterPicked = null
let cpuPick = null

const dog = new Pet(1.5, 1.5, 100, 1.5)
const cat = new Pet(1.5, 1.2, 100, 2)
const snake = new Pet(2, 1.2, 100, 1.5)
const turtle = new Pet(1.2, 2, 100, 1)

function playGame(){
    let i = Math.floor(Math.random() * grid.length)
    console.log(i)
    if(i === 0){
        cpuPick = dog
        console.log(cpuPick)
        computerModel.classList.add('character-option-dog') 
        computerName.textContent = 'dog'
    }else if(i === 1){
        let cpuPick = cat
        console.log(cpuPick)
        computerModel.classList.add('character-option-cat') 
        computerName.textContent = 'cat'
    } else if(i === 2){
        let cpuPick = snake
        console.log(cpuPick)
        computerModel.classList.add('character-option-snake') 
        computerName.textContent = 'snake'
    } else if(i == 3){
        let cpuPick = turtle
        console.log(cpuPick)
        computerModel.classList.add('character-option-turtle') 
        computerName.textContent = 'turtle'
    }
    characterSelectionScreen.classList.add('hidden')
    battleScreen.classList.remove('hidden')
    if(characterPicked === dog){
        
        playerModel.classList.add('character-option-dog') 
        characterName.textContent = 'dog'
    } else if(characterPicked === cat){
        
        playerModel.classList.add('character-option-cat') 
        characterName.textContent = 'cat'
    } else if(characterPicked === snake){
        
        playerModel.classList.add('character-option-snake') 
        characterName.textContent = 'snake'
    } else if(characterPicked === turtle){
        
        playerModel.classList.add('character-option-turtle') 
        characterName.textContent = 'turtle'
    }


    
    }

function dogSelected(){
    characterPicked = dog
    console.log(characterPicked)
    attackMoves[0].textContent = 'Bite'
    attackMoves[1].textContent = 'Dig'
    attackMoves[2].textContent = 'Roll'
    attackMoves[3].textContent = 'Lick'
    playGame()
}
function catSelected(){
    characterPicked = cat
    console.log(characterPicked)
    attackMoves[0].textContent = 'Bite'
    attackMoves[1].textContent = 'Scratch'
    attackMoves[2].textContent = 'Catch'
    attackMoves[3].textContent = 'Purr'
    playGame()
}
function snakeSelected(){
    characterPicked = snake
    console.log(characterPicked)
    attackMoves[0].textContent = 'Bite'
    attackMoves[1].textContent = 'Venom'
    attackMoves[2].textContent = 'Coil'
    attackMoves[3].textContent = 'Fangs'
    playGame()
}
function turtleSelected(){
    characterPicked = turtle
    console.log(characterPicked)
    attackMoves[0].textContent = 'Bite'
    attackMoves[1].textContent = 'Shell Smash'
    attackMoves[2].textContent = 'HeadButt'
    attackMoves[3].textContent = 'Rapid Spin'
    playGame()
}






grid[0].addEventListener('click', dogSelected)
grid[1].addEventListener('click', catSelected)
grid[2].addEventListener('click', snakeSelected)
grid[3].addEventListener('click', turtleSelected)

// if(cat.speed > dog.speed){

//     console.log(cat.speed)
// }else{

//     console.log(dog.speed)
// }

