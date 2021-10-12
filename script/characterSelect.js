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

let playerHealth = 100
playerLifeBar.setAttribute('value', playerHealth)
let computerHealth = 100
computerLifeBar.setAttribute('value', computerHealth)



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
        cpuPick = cat
        console.log(cpuPick)
        computerModel.classList.add('character-option-cat') 
        computerName.textContent = 'cat'
    } else if(i === 2){
        cpuPick = snake
        console.log(cpuPick)
        computerModel.classList.add('character-option-snake') 
        computerName.textContent = 'snake'
    } else if(i == 3){
        cpuPick = turtle
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
    function playerDoesDamageOne() {
        let playerdamage = baseDamage[0] * characterPicked.attack/ cpuPick.defence
        let miss = Math.random()
        if (miss < 0.9) {
            computerHealth -= playerdamage
            computerLifeBar.setAttribute('value', computerHealth)
            computerlifeValue.textContent = Math.floor(computerHealth)
            outcome.textContent = `You landed your move and did ${Math.floor(playerdamage)} damage`
        } else {
            outcome.textContent = `Your move was dodged as you miss your mark!`
            return
        }
    }
    function playerDoesDamageTwo() {
        let playerdamage = baseDamage[1] * characterPicked.attack/ cpuPick.defence
        miss = Math.random()
        if (miss < 0.8){
            computerHealth -= playerdamage
            computerLifeBar.setAttribute('value', computerHealth)
            computerlifeValue.textContent = Math.floor(computerHealth)
            outcome.textContent = `You landed your move and did ${Math.floor(playerdamage)} damage`
        } else{
            return
            outcome.textContent = `Your move was dodged as you miss your mark!`
        }
    }
    function playerDoesDamageThree() {
        let playerdamage = baseDamage[2] * characterPicked.attack/ cpuPick.defence
        miss = Math.random()
        if (miss < 0.75){
            computerHealth -= playerdamage
            computerLifeBar.setAttribute('value', computerHealth)
            computerlifeValue.textContent = Math.floor(computerHealth)
            outcome.textContent = `You landed your move and did ${Math.floor(playerdamage)} damage`
        } else{
            outcome.textContent = `Your move was dodged as you miss your mark!`
            return
        }
    }
    function playerDoesDamageFour() {
        let playerdamage = baseDamage[3] * characterPicked.attack/ cpuPick.defence
        miss = Math.random()
        if (miss < 0.6){
            computerHealth -= playerdamage
            computerLifeBar.setAttribute('value', computerHealth)
            computerlifeValue.textContent = Math.floor(computerHealth)
            outcome.textContent = `You landed your move and did ${Math.floor(playerdamage)} damage`
        } else{
            outcome.textContent = `Your move was dodged as you miss your mark!`
            return
        }
    }
    function computerDoesDamage() {
        let d = Math.floor(Math.random() * 4)
        let computerDamage = baseDamage[d] * cpuPick.attack / characterPicked.defence
        miss = Math.random()
        if ( d === 0){
            if (miss < 0.9){
                playerHealth -= computerDamage
                playerLifeBar.setAttribute('value', playerHealth)
                playerlifeValue.textContent = Math.floor(playerHealth)
            } else {
                return
            }
        } else if ( d === 1){
            if (miss < 0.8) {
                playerHealth -= computerDamage
                playerLifeBar.setAttribute('value', playerHealth)
                playerlifeValue.textContent = Math.floor(playerHealth)
            } else {
                return
            }
        } else if ( d === 2){
            if (miss < 0.75) {
                playerHealth -= computerDamage
                playerLifeBar.setAttribute('value', playerHealth)
                playerlifeValue.textContent = Math.floor(playerHealth)
            } else{
                return
            }

        } else if ( d === 3){
            if (miss < 0.6){
                playerHealth -= computerDamage
                playerLifeBar.setAttribute('value', playerHealth)
                playerlifeValue.textContent = Math.floor(playerHealth)
            } else {
                return
            }
        } 
    }
    function reloadPage(){
        location.reload()
    }
    function gameEndWinner(){
       ending.classList.toggle('hidden')
       endingH2.textContent = 'YOU WON! CLICK TO GO AGAIN!'
       endingH2.addEventListener('click', reloadPage)
       
    }
    function gameEndLoser(){
        ending.classList.toggle('hidden')
        endingH2.textContent = 'YOU LOST! CLICK TO GO AGAIN!'
        endingH2.addEventListener('click', reloadPage)
    }
    

    function speedCheckOne() {
        if(characterPicked.speed > cpuPick.speed){
            playerDoesDamageOne()
            if(computerHealth <= 0){
                gameEndWinner()
            } else {
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                }
            }
        } else if(characterPicked.speed < cpuPick.speed){
            computerDoesDamage()
            if(playerHealth <= 0){
                gameEndLoser()
            } else {
                playerDoesDamageOne()
                if(computerHealth <= 0){
                    gameEndWinner()
                }
            }
        }else if(characterPicked.speed === cpuPick.speed){
            let j = Math.floor(Math.random)
            if(j < 0.5){
                playerDoesDamageOne()
                if(computerHealth <= 0){
                    gameEndWinner()
                }else {
                    computerDoesDamage()
                    if(playerHealth <= 0){
                        gameEndLoser()
                    }
                }
            } else if(j => 0.5){
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                } else {
                    playerDoesDamageOne()
                    if(computerHealth <= 0){
                        gameEndWinner()
                    }
                }
            }
        }
    }
    function speedCheckTwo() {
        if(characterPicked.speed > cpuPick.speed){
            playerDoesDamageTwo()
            if(computerHealth <= 0){
                gameEndWinner()
            } else {
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                }
            }
        } else if(characterPicked.speed < cpuPick.speed){
            computerDoesDamage()
            if(playerHealth <= 0){
                gameEndLoser()
            } else {
                playerDoesDamageTwo()
                if(computerHealth <= 0){
                    gameEndWinner()
                }
            }
        }else if(characterPicked.speed === cpuPick.speed){
            let j = Math.floor(Math.random)
            if(j < 0.5){
                playerDoesDamageTwo()
                if(computerHealth <= 0){
                    gameEndWinner()
                }else {
                    computerDoesDamage()
                    if(playerHealth <= 0){
                        gameEndLoser()
                    }
                }
            } else if(j => 0.5){
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                } else {
                    playerDoesDamageTwo()
                    if(computerHealth <= 0){
                        gameEndWinner()
                    }
                }
            }
        }
    }
    function speedCheckThree() {
        if(characterPicked.speed > cpuPick.speed){
            playerDoesDamageThree()
            if(computerHealth <= 0){
                gameEndWinner()
            } else {
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                }
            }
        } else if(characterPicked.speed < cpuPick.speed){
            computerDoesDamage()
            if(playerHealth <= 0){
                gameEndLoser()
            } else {
                playerDoesDamageThree()
                if(computerHealth <= 0){
                    gameEndWinner()
                }
            }
        }else if(characterPicked.speed === cpuPick.speed){
            let j = Math.floor(Math.random)

            if(j < 0.5){
                playerDoesDamageThree()
                if(computerHealth <= 0){
                    gameEndWinner()
                }else {
                    computerDoesDamage()
                    if(playerHealth <= 0){
                        gameEndLoser()
                    }
                }
            } else if(j => 0.5){
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                } else {
                    playerDoesDamageThree()
                    if(computerHealth <= 0){
                        gameEndWinner()
                    }
                }
            }
        }
    }
    function speedCheckFour() {
        if(characterPicked.speed > cpuPick.speed){
            playerDoesDamageFour()
            if(computerHealth <= 0){
                gameEndWinner()
            } else {
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                }
            }
        } else if(characterPicked.speed < cpuPick.speed){
            computerDoesDamage()
            if(playerHealth <= 0){
                gameEndLoser()
            } else {
                playerDoesDamageFour()
                if(computerHealth <= 0){
                    gameEndWinner()
                }
            }
        } else if(characterPicked.speed === cpuPick.speed){
            let j = Math.floor(Math.random)
            if(j < 0.5){
                playerDoesDamageFour()
                if(computerHealth <= 0){
                    gameEndWinner()
                } else{
                    computerDoesDamage()
                    if(playerHealth <= 0){
                        gameEndLoser()
                    }
                }
            } else if(j => 0.5){
                computerDoesDamage()
                if(playerHealth <= 0){
                    gameEndLoser()
                } else {
                    playerDoesDamageFour()
                    if(computerHealth <= 0){
                        gameEndWinner()
                    }
                }
            }
        }
    }
 

    attackMoves[0].addEventListener('click', speedCheckOne)
    attackMoves[1].addEventListener('click', speedCheckTwo)
    attackMoves[2].addEventListener('click', speedCheckThree)
    attackMoves[3].addEventListener('click', speedCheckFour)

    function itemOne() {
        playerHealth += 12
        computerDoesDamage()
    }
    function itemTwo() {
        characterPicked.speed += 0.2
        computerDoesDamage()
    }
    function itemThree() {
        characterPicked.defence += 0.2
        computerDoesDamage()
    }
    
    function itemFour() {
        characterPicked.attack += 0.2
        computerDoesDamage()
    }

    itemChoices[0].addEventListener('click', itemOne)
    itemChoices[1].addEventListener('click', itemTwo)
    itemChoices[2].addEventListener('click', itemThree)
    itemChoices[3].addEventListener('click', itemFour)


    
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




// const arrowRight = document.querySelectorAll('.arrows div')
//const grid = document.querySelectorAll('.grid div')



characterListArray = ['noHover', 'noHover', 'noHover', 'noHover']
// mainListArray = ['inactive', 'inactive', 'inactive']
// mainListArrayOpacity = ['noshow', 'noshow', 'noshow']
// //mainList
grid.forEach((cell, i) => {
    cell.classList.add(characterListArray[i])
})
// mainList.forEach((cell, i) => {
//     cell.classList.add(mainListArray[i])
//     cell.classList.add(mainListArrayOpacity[i])
//   })

const nonChosen = Array.from(grid).filter((cell) => {
    return cell.classList.contains('noHover')
})
//   const freeCells = Array.from(mainList).filter((cell) => {
//     return cell.classList.contains('inactive')
//   })

//   const notShowingCells = Array.from(arrowRight).filter((cell) => {
//       return cell.classList.contains('opacity')
//   })

// //initialise the active highlghting class

const beginning = nonChosen[0]
beginning.classList.add('hover')
// const starting = freeCells[0]
// starting.classList.add('active')
// const opacityStarting = notShowingCells[0]
// opacityStarting.classList.add('show')

// //storing the active position
let hoverIndex = Array.from(grid).indexOf(beginning)
// let activeIndex = Array.from(mainList).indexOf(starting)
// let opacityIndex = Array.from(arrowRight).indexOf(opacityStarting)
const handleArrowRightCharacter = () => {
    const isSelectorOnRightEdge = (hoverIndex) => hoverIndex === 3
    tryMoveSelector(1, isSelectorOnRightEdge)
    startingScreen = 'characterChoose'
}
// const handleArrowUpMenu = () => {
    //     const isPlayerOnTop = (activeIndex) => activeIndex === 0
    //     tryMovePlayer(-1, isPlayerOnTop)
    //   }
    const handleArrowLeftCharacter = () => {
        const isSelectorOnLeftEdge = (hoverIndex) => hoverIndex === 0
        tryMoveSelector(-1, isSelectorOnLeftEdge)
        startingScreen = 'characterChoose'
    }
    
// const handleArrowDownMenu = () => {
//     const isPlayerOnBottom = (activeIndex) => activeIndex === 2
//     tryMovePlayer(1, isPlayerOnBottom)
//   }
const tryMoveSelector = (changeInIndex, isIndexAtLimit) => {
    if (startScreen.classList.contains('hidden') && battleScreen.classList.contains('hidden')){

        if (isIndexAtLimit(hoverIndex)) {
            return
        }
    
        const newHoverIndex = hoverIndex + changeInIndex
        
        const newSector = grid[newHoverIndex]
    
        grid[hoverIndex].classList.remove('hover')
        newSector.classList.add('hover')
    
        hoverIndex = newHoverIndex
    }
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowRight':
            handleArrowRightCharacter()
            break
            case 'ArrowLeft':
                handleArrowLeftCharacter()
                break
            }
        })
        
        function choose() {
            console.log('hello')
            if(grid[0].classList.contains('hover')){
                dogSelected()
            } else if(grid[1].classList.contains('hover')){
                catSelected()
            }else if(grid[2].classList.contains('hover')){
                snakeSelected()
            } else{
                turtleSelected()
            }
        }
document.addEventListener('keydown', function (e) {
    if (e.key === 'e' && startScreen.classList.contains('hidden') && battleScreen.classList.contains('hidden')) {
        choose()
    }
 })


grid[0].addEventListener('click', dogSelected)
grid[1].addEventListener('click', catSelected)
grid[2].addEventListener('click', snakeSelected)
grid[3].addEventListener('click', turtleSelected)


