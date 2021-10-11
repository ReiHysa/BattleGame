const baseDamage = [10, 13, 12, 20]

characterpicked.speed
cpuPick.speed
attackMoves[0]

playerDoesDamage
ComputerDoesDamage

let computerLifeBar = document.querySelector('.computer-life')
let playerLifeBar = document.querySelector('.player-life')

let playerHealth = 100
playerLifeBar.setAttribute('value', playerHealth)
let computerHealth = 100
computerLifeBar.setAttribute('value', computerHealth)

let playerlifeValue = document.querySelector('.player-hp')
let computerlifeValue = document.querySelector('.cpu-hp')

To run the animations, I need to add that to the speedChecks so the damage caluclations are done after the animation!
