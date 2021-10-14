# BattleGame

Pet Arena - This is my first project from the General Assembly course SEI-59

Day 1

After day 1 I added all the HTML and CSS of the design!
I went for a nintendo/gameboy aestetic, replicating the old retro themes when playing the classical pokemon games. With this idea I decided to emulate the experience a user will have playing these games today by making a set height and width of the game that does not change. This makes the game feel more like an old emulator rather then something modern.

In my CSS I made the different sections hidden when editing by simply adding the:

    .hidden{
        display: none;
    }

The plan is to toggle this class for the different sections when the next area is able to carry on such as the clickign of start game and play game within section one and two!

For the second section, I looked to create a character selection screen. I implimented grid within the html to make the box look! The aim is to use javascript to click and choose the character that you wish to be.

    .grid div:hover{
        border: 2px solid white;
    }

I used this simple idea to change and edit the borders around the selection screen to make a more prominent highlighting of the box. The aim will be to do this same effect by using the arrows keys when editing and changeing the javascript in later days.

The battle section was the most complicated to make as I had to use flexbox within flexbox within flex box. Examples of this is:

    section.battle {

    display: flex;
    background-color: white;
    color: black;
    flex-direction: column;
    align-items: center;
    height: 45vh;
    width: 420px;
    border: 4px dashed black;
    }

    .life {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 15%;
    }

There are more sections that use flexbox like this within the CSS but the general idea was to make everything split from each other while still keeping the nintendo aesthetic to its design!

I set the Items and Attacks as undefined and hidden, this will change depending on the class of the pet character that is chosen and on the future decisons made such as the clicking of either Attack || Items!
-> This will open up either the item or attack menu. The code example of this is:

    .content {
    width: 70%;
    height: 100%;
    background-color: rgb(196, 196, 196);
    border-left: 2px solid darkgrey;
    }
    .attack-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .items {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

Another idea used is the use of a progress bar for the health. Using javascript I will edit the value of the bar by taking away tamage taken! Furthermore, the character name text content will be edited depending on the character that is chosen within the game!

I ended the day by actually finishing the javascript of page one!
I started off by querySelecting all the relevant information and adding eventListeners to look for clicks. This will activate the function of the code. The functions made were the following:

    function characterSelectScreen() {
    startScreen.classList.add('hidden')
    characterSelectionScreen.classList.remove('hidden')

    }

What this code basically is doing is adding the hidden class to the starting screen and removing it from the character select screen.

    function howToFunction() {
    let informationContent = information.hasChildNodes()

    if(informationContent === true){
        information.removeChild(information.firstChild)
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = 'textcontent'
        information.appendChild(howToParagraph)

    } else if (informationContent === false){
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = 'textcontent'
        information.appendChild(howToParagraph)
    }

    }

    function aboutFunction() {
    let informationContent = information.hasChildNodes()
    console.log(informationContent)

    if(informationContent === true){
        information.removeChild(information.firstChild)
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "TextContent"
        information.appendChild(howToParagraph)

    } else if (informationContent === false){
        const howToParagraph = document.createElement('p')
        howToParagraph.textContent = "TextContent"
        information.appendChild(howToParagraph)
        console.log(howToParagraph)

        }

    }

What these two functions do is add content to the information div based on what was clicked. If something is clicked again the if statements will determine whether the information has child nodes and if they do, it will remove it and then add the relevant information to the page. This means people can click the text as many times as they like without the page adding multiple paragraph elements to the information div.

Summary:

I Did not find much things difficult today as I mainly played around with the aesthetics of the design. My psuedocode has allowed me to plan the wireframes and ideas strongly and come to this project prepared to create a good, playable game! Some of the CSS may need touching up along the way but at this moment of time I feel as if the code made matches the original aestetic that I thought of when making the game. With the javascript for the front page, I could add the functions of arrow keys and enter to make the game more appealing and give it the classical gameboy feel to it.

Day 3:

I took a day rest from coding where I planned potential different routes to take to improve my current code to add to the overall aesthetic. My current css added a hover element which changed colour.
However, I felt like this did not match the overall aesthetic of the original gameboy and decided to add a margin to move the image down and add an arrow. To give a select feeling to it.

I did this by adding:

    <aside class= "arrow-down-dog opacity"></aside>

    <aside class= "arrow-down-cat opacity"></aside>

    <aside class= "arrow-down-snake opacity"></aside>

    <aside class= "arrow-down-turtle opacity"></aside>

Using Javascript, I would toggle the opacity to show the specific arrows when hovering, also adding a margin to the top which in turn would push the images down.

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

I added these functions for every type of class which would replace the content box with the respective character, and also change the text of the box. It would also toggle the opacity, showing the arrow element.

monday:

I wanted to make sure that all the attacks had a probability on missing depending on the amount of damage a move does. This means that just doing the move that does the most damage is not always beneficial as it could mean you miss more of your attacks. The code used for this was:

    function playerDoesDamageFour() {
    let playerdamage = (baseDamage[3] * characterPicked.attack) / cpuPick.defence;
    miss = Math.random();
    if (miss < 0.5) {
        computerHealth -= playerdamage;
        computerLifeBar.setAttribute("value", computerHealth);
        computerlifeValue.textContent = Math.floor(computerHealth);
        outcome.textContent = `You landed your move and did ${Math.floor(
        playerdamage
        )} damage`;
        attackChoice.classList.toggle("hidden");
    } else {
        outcome.textContent = `Your move was dodged as you miss your mark!`;
        attackChoice.classList.toggle("hidden");
        return;
    }
    }

This specific code ensures that the probability is done before the player takes damage through Math.random().

To ensure that there is a winner and loser, I added a new hidden element which is no longer hidden when it appears which has its text chaneged to either 'You have won' or 'You have lost'. One of the outcomes needed to have a winner or a loser.

Following from this, I also added the use of clicking and activating potions with different effects such as health, speed, attack, defence. This was relatively easy to do, I just added event listeners for each of the options which in turn is related to a function that applies the relevant effects to the users character.

Finally, using the relevant classes, I established which character model was displayed by using if statements which in turn will apply the relevent class to the character display section.

tuesday:

The main aim for tuesday was to get the arrow keys and enter working on both the first and second page. I did this by using arrays and class establishment to assign when a class is active and when it is not. The enter key works in the format that if the class contains the active class then it will change the screen page. This then allowed me to add if statements on when the code is orginally running and when it is not.
I struggled in adding the functionality in the final page due to their being both a list and paragraph elements which are seperated. My ideas behind fixing this is adding true and false statements which means when one is active the other cannot move. Also having more values that take into account which page/ section we are on.

wendesday:

I managed to get the final game fully working with the keyboard arrows and integrated audio files depending on if you lost or win, what game state you are in such as character select screen or battle mode etc.

buttons for final gameplay
audio files fully integrated.

Thursday:

For the final day I reformatted some of my code to make it a bit more readable and funactionable. I also altered some of my images and pictures to better suit the game. The main focus of this was the background which had a gamboy behind it. Originally it was not in shape, and with a few alterations to the height, the image was changed to better suit the display.

WWW/EBI:

If I could alter/ redo this project again I would change how I have written my current coded. Due to the current structure of it I would need to reformat much of the work to make it functionable again. I repeated lots of code to do lots of small changes when in reality it most likely could jave all been done within the same function. This was a great stepping stone in teaching me in creating more simplified code for future reference as changes that need to be made would be done much more simply. All in all, I felt like I came a long way in learning and producing my code. As my first solo project in general assembly I am delighted by my final outcome despite the flaws that the code may have. Each project I consider a learning code for future reference and this project has without a doubt reassured me that I can perservere within my code and create a final product which I had orginally envisioned!
