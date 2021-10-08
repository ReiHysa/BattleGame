Animal Arena!

Find out if there can be more then one HTML file. If that is the case do I make two seperate pages or do i use display none to hide the content on each page?

html and css ideas//

    section class start screen
    h1 animal arena
    div menu
    h2 start game
    h2 How to play
    h2 About
    /div
    /section

(The aesthetic will be pixels and colourful! The text will all be centered!)
section character select screen

    h1 animal arena

    div chosen character //This will display a larger image of the character you have chosen!
    /div
    div grid
    div\*4 //This will contain the different characters inside! Each has a different class with the background image being a specific character
    /div
    div //This will be a hidden element with 0 opacity that is placed in the bottom corner. When clicked, 3 more divs will be added
    /div //with new characters entered at the bottom of the grid!

    button play!

(The aesthetic will be pixels and colourful! The text will all be centered!)

section battle

    div life bar your
    progress bar
    p\*2 //one for the HP one for the Name
    /div

    div life bar cpu
    progress bar
    p\*2 //one for the HP one for the Name
    /div

(Use the idea of the charity task to adjust the health points when certain button clicked etc)

(these will be placed in the top left and right corner of the screen)

    div character model
    //This contains nothing but javascript will add a model too this section that will display the back of the model (if its your character)
    /div

    div enemy model
    //This contains nothing but javascript will add a model too this section that will display the front of the model (if its your enemy character)
    /div

/

    div decisions
    div choice
    h3 what will you do?
    p attack
    p use items
    /div
    div options
    attack buttons or Item choices (This will differ for each character and be changed depending on the previous choice. Using javascript)
    /div
    /div

Javascript//

The main idea behind the javscript methods are:
When on character select screen, to be able to move and choose your character using the arrow and enter keys.

    keydown event listener -> narowing down the left,right,up,down arrow keys. (Could also do the same idea for W,A,S,D)

This can also be used to navigate the main menu as well!

Add a class effect when on the selected item of a white border. (This will be done via hover as well)

    box.classList.add('border')

if you are activating the hover effect the character display wll show the character currently being hovered by adding and removing classes

    text.content = character name that has been hovered (Could also add an image of the character!)

once character is selected, using math.random the computer will choose a character!

    Math.floor(Math.random \* characterSelectScreen.length)

when both selected, it will move onto the next area once the play button is clicked! It will be grayed out unless both options are
selected!

    if (both playerChosen === true && computerChosen === true){
    load the game arena
    }

Within the actual game, you will have different classes for each character model.

    class Dog{
    constructor{
    ...
    }
    }
    class Cat{
    constructor{
    ...
    }
    }
    class Turtle{
    constructor{
    ...
    }
    }
    class Snake{
    constructor{
    ...
    }
    }
    base animal class = shared stats

these character models have; Speed, Strength, Defence Stats. Higher speed stat attacks first. Defence stats take less damage.
attack stats deal more damage.

    if (playerSpeed > computerSpeed){
    player goes first
    } else {
    computer goes first
    }

They all also have their own move with their own base attack damage which is then multiplied with the attack stat to determine the damage done
then is minuesed by the defence stat of the other character model to determine how much hitpoints of damage is taken.

    Bite = 10 damage
    DogAttack = 1.2

    BiteDamage = 10 \* 1.2 //=12

    defence = 2
    Damagetaken = ChoiceMade \* attackMultiplier / defence
    //This case the damage taken will be 6!//

Every one have 3 unique items which increase one of their stats in consequence of reducing another stat!
These selcetd classes will be applied to each event when calling upon it!

    item 1 -> +0.5 speed, -0.5 defence
    item 2 -> +0.5 Attack, -5 HP
    item 3 -> +0.5 defence, -0.25 attack, -0.25 speed, +5 Hp

Value of progress bar will go down in propoertion to damage taken. When value equals 0 you either win or lose the game!

    let PlayerhitPoints = document.querySelector('playerHP', value)

    let value = 100
    value = 100 - damage taken
    //new value = 94

Math.random and Math.floor to determine the choices made by the computer. Depending on the number chosen, a particular task will play out
which will attack you. moveChoice = [attack 1, attack2, attack3, attack4] cpuChoice[i]. Incoroporate the decision based system from
rock paper scissors task!

[Previous tasks done that can be incorporated into this. Donation tracker. Cat grid. Marvel vs DC.]

Another Idea will be miss rate (Extra){
Bite has a 80% chance of hitting and 20% chance of missing.

    const movelanding = Math.floor(Math.random)

    if(movelanding =< 0.8){
        move lands
    } else {
        move misses, BiteDamage = 0,
        text.content = `${animal} dodged the move, taking 0 damage`
    }

}

//When game is done, either you win or you lose message will be displayed.

    if(playerHp =< 0){
    text.content = your HP has dropped below 0, you have fainted.
    gameOver() }

-> This function will reload the page, forcing you to start from the home page again. Potentially not reloading but sending you back to the homepage screen!

(Absolute basic idea behind the code. Begin refining to code that makes sense soon!)

The different animals will be:

    Dog (Balanced), Cat (Speed, low def, medium attack, medium hp), Turtle (Defence, low speed, high hp, low attack), Snake (Attack, low defence, medium speed, low hp)

Extra stuff do to:
Add robin, Emile, Joan As secret characters. Robin bird? Emile Gunner? Joan Plant?
Potentially add new skin options for the pets.
Add animations for each of the attacks. Will there be movement or will they just say damage that was taken?

Order to do things//

Going to get all the seperate html files to be wireframed properly in seperate html documents potentially
Then get them looking like they need to by using css.
set a uninversal class that hides the html.
set the other two pages after they've looked like what they needed to as display: hidden.
This will make everything look exactly how they are meant to.

Using javascript I will then add the content that will change the information loaded into the arena.
This will make everything functional and playable (in the arena) and change the content of the things being
loaded within the page.

You will load the information and change all the relevant information within the arena depending on the class
that was selected. This will change all the buttons loaded and be relevant to the character that was selected,
example snake has [Bite, Venom, Coil, Fangs] while a dog has [Bite, Claw, Roll, Lick]. Unique moves for each
character. Moves that are used between each othe rsuch as bite will have a base attack damage which will
then be changed and altered depending on the attack stat of the character.
