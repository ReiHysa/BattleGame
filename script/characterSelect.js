const chosenCharacter = document.querySelector('.chosenCharacter')
const chosenCharacterText = document.querySelector('.chosenCharacter p')
const grid = document.querySelectorAll('.grid div')
const arrow = document.querySelectorAll('aside')


function dogHover(){
    arrow[0].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-dog')
    chosenCharacterText.textContent = 'Dog'
}
function dogHoverNo(){
    arrow[0].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-dog')
    chosenCharacterText.textContent = ''
}
function catHover(){
    arrow[1].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-cat')
    chosenCharacterText.textContent = 'Cat'
}
function catHoverNo(){
    arrow[1].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-cat')
    chosenCharacterText.textContent = ''
}
function turtleHover(){
    arrow[3].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-turtle')
    chosenCharacterText.textContent = 'Turtle'
}
function turtleHoverNo(){
    arrow[3].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-turtle')
    chosenCharacterText.textContent = 'Tur'
}
function snakeHover(){
    arrow[2].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-snake')
   chosenCharacterText.textContent = 'Snake'
}
function snakeHoverNo(){
    arrow[2].classList.toggle('opacity')
    chosenCharacter.classList.toggle('character-option-snake')
   chosenCharacterText.textContent = ''
}

grid[0].addEventListener('mouseover', dogHover)
grid[0].addEventListener('mouseout', dogHoverNo)
grid[1].addEventListener('mouseover', catHover)
grid[1].addEventListener('mouseout', catHoverNo)
grid[3].addEventListener('mouseover', turtleHover)
grid[3].addEventListener('mouseout', turtleHoverNo)
grid[2].addEventListener('mouseover', snakeHover)
grid[2].addEventListener('mouseout', snakeHoverNo)