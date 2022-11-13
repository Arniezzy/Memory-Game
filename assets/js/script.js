//each card
var card1 = document.querySelector('#card1');
var card2 = document.querySelector('#card2');
var card3 = document.querySelector('#card3');
var card4 = document.querySelector('#card4');
var card5 = document.querySelector('#card5');
var card6 = document.querySelector('#card6');
var card7 = document.querySelector('#card7');
var card8 = document.querySelector('#card8');
var card9 = document.querySelector('#card9');
var card10 = document.querySelector('#card10');
var card11 = document.querySelector('#card11');
var card12 = document.querySelector('#card12');
//set array as the card assignments
var cardArr = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12];

//card flip counter
const state = {
    flippedCards: 0,
    totalFlips: 0,
}

//winning condition variables
const selectors = {
    welcomeStart: document.querySelector('.game'),
    themeSelector: document.querySelector('.theme'),
    gameBoard: document.querySelector('.game-board'),
    yourScore: document.querySelector('.your-score'),
    highScore: document.querySelector('.high-score'),
    memoryGame: document.querySelector('.memory-game'),
    scoreBoard: document.querySelector('.scoreboard')  
}

//set starting screen
selectors.themeSelector.style.display = 'none'
selectors.memoryGame.style.display = 'none'
selectors.scoreBoard.style.display = 'none'

=======
    gameBoard: document.querySelector('.game-board'),
    yourScore: document.querySelector('.your-score'),
    highScore: document.querySelector('.high-score'),
    memoryGame: document.querySelector('.memory-game')
}

//display totalFlips as Score
selectors.yourScore.innerHTML = `<span> Score: ${state.totalFlips}</span> moves`

//set starting condition for 'play again' 
//when the game is won, the display turns to 'none
//selectors.memoryGame.style.display = 'flex';

//high score from local storage
var highScore = localStorage.getItem("highScore");

if (highScore!=null){
    selectors.highScore.innerHTML = `<span>  Score: ${highScore}</span> moves`
}
else{
    selectors.highScore.innerHTML = `<span> Best Score: none </span>`
=======
selectors.memoryGame.style.display = 'flex';


//high score from local storage
var highScore = localStorage.getItem("highScore");
console.log(highScore);

if (highScore!=null){
    selectors.highScore.innerHTML = `<span> Score: ${highScore}</span> moves`
}
else{
    selectors.highScore.innerHTML = `<span>Best Score: none </span>`
};

//Shuffle Image Assignments
//Fisher-Yates Shuffle 
function shuffle(array){
    let currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        cardArr = array;
    }

//Random Pokemon Image
//905 possible choices
const fetchPokemon = () => {
    const promises = [];
    //set i<=# to the number of needed choices
    for (let i = 1; i <= 6; i++) {
        const x = Math.floor(Math.random() * 906);
        const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            image: result.sprites['front_default'],
        }));
        //randomize order of card assignments
        shuffle(cardArr);
        //set Pokemon images as card front-face
        cardArr[0].src = pokemon[0].image;
        cardArr[1].src = pokemon[0].image;
        cardArr[2].src = pokemon[1].image;
        cardArr[3].src = pokemon[1].image;
        cardArr[4].src = pokemon[2].image;
        cardArr[5].src = pokemon[2].image;
        cardArr[6].src = pokemon[3].image;
        cardArr[7].src = pokemon[3].image;
        cardArr[8].src = pokemon[4].image;
        cardArr[9].src = pokemon[4].image;
        cardArr[10].src = pokemon[5].image;
        cardArr[11].src = pokemon[5].image;

        cardArr[0].parentElement.setAttribute('data-framework', 'pikachu');
        cardArr[1].parentElement.setAttribute('data-framework', 'pikachu');
        cardArr[2].parentElement.setAttribute('data-framework', 'charizard');
        cardArr[3].parentElement.setAttribute('data-framework', 'charizard');
        cardArr[4].parentElement.setAttribute('data-framework', 'eevee');
        cardArr[5].parentElement.setAttribute('data-framework', 'eevee');
        cardArr[6].parentElement.setAttribute('data-framework', 'squirtle');
        cardArr[7].parentElement.setAttribute('data-framework', 'squirtle');
        cardArr[8].parentElement.setAttribute('data-framework', 'snorlax');
        cardArr[9].parentElement.setAttribute('data-framework', 'snorlax');
        cardArr[10].parentElement.setAttribute('data-framework', 'mew');
        cardArr[11].parentElement.setAttribute('data-framework', 'mew');
    });
    selectors.memoryGame.style.display = 'flex'
    selectors.scoreBoard.style.display = 'flex'
    selectors.themeSelector.style.display = 'none'
};


//Random Cat Image
//100 possible choices
const fetchCats = () => {
    const promises = [];
    const url = `https://api.thecatapi.com/v1/images/search?limit=6`;
    promises.push(fetch(url).then((res) => res.json()));
    Promise.all(promises).then((results) => {
        var cats = [];
        //set Cats array to be only the images
        //change i<=# to be the number of how many images are necessary for the game 
        for (let i = 0; i <= 5; i++){
            cats.push(results[0][i]['url'])
        };
        //randomize order of card assignments
        shuffle(cardArr);
        //set Cat images as card front-face
        cardArr[0].src = cats[0];
        cardArr[1].src = cats[0];
        cardArr[2].src = cats[1];
        cardArr[3].src = cats[1];
        cardArr[4].src = cats[2];
        cardArr[5].src = cats[2];
        cardArr[6].src = cats[3];
        cardArr[7].src = cats[3];
        cardArr[8].src = cats[4];
        cardArr[9].src = cats[4];
        cardArr[10].src = cats[5];
        cardArr[11].src = cats[5];

        cardArr[0].parentElement.setAttribute('data-framework', 'pikachu');
        cardArr[1].parentElement.setAttribute('data-framework', 'pikachu');
        cardArr[2].parentElement.setAttribute('data-framework', 'charizard');
        cardArr[3].parentElement.setAttribute('data-framework', 'charizard');
        cardArr[4].parentElement.setAttribute('data-framework', 'eevee');
        cardArr[5].parentElement.setAttribute('data-framework', 'eevee');
        cardArr[6].parentElement.setAttribute('data-framework', 'squirtle');
        cardArr[7].parentElement.setAttribute('data-framework', 'squirtle');
        cardArr[8].parentElement.setAttribute('data-framework', 'snorlax');
        cardArr[9].parentElement.setAttribute('data-framework', 'snorlax');
        cardArr[10].parentElement.setAttribute('data-framework', 'mew');
        cardArr[11].parentElement.setAttribute('data-framework', 'mew');
    });
    selectors.memoryGame.style.display = 'flex'
    selectors.scoreBoard.style.display = 'flex'
    selectors.themeSelector.style.display = 'none'
};

// Flipping cards
const cards = document.querySelectorAll(".memory-card");

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
    //count the number of currently flipped cards
    state.flippedCards++
    //count the number of total card flips
    state.totalFlips++

    //display totalFlips as Score
        selectors.yourScore.innerHTML = `<span> Score: ${state.totalFlips}</span> moves`

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

    //check for winning conditions
    if (!document.querySelectorAll('.memory-card:not(.flip)').length) {
        setTimeout(() => {
            selectors.gameBoard.classList.add('done')
            selectors.memoryGame.style.display = 'none'
            selectors.yourScore.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> moves
            `
                    //set highscore to local storage
                    if (highScore!=null){
                        //check if high score or your score is lower
                        if(highScore>yourScore){
                            localStorage.setItem("highScore", state.totalFlips);
                        }
                    }
                    else{
                        localStorage.setItem("highScore", state.totalFlips);
                    };
        }, 1000)

=======
    }
    checkForMatch();
}

function checkForMatch (){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click',flipCard));

//function for theme form submission 
function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();

    //Selected option
    var selected = document.getElementById('theme-options').value;
    console.log(selected);  
    console.log(typeof(selected)); 
    //Call the API based on selected theme
    if (selected == 'pokemon'){
        console.log("run pokemon");
        fetchPokemon();
    }  
    else if(selected == 'cats') {
        console.log("run cats");
        fetchCats();
    }
  }

function startGame(){
    selectors.themeSelector.style.display = 'flex'
    selectors.welcomeStart.style.display = 'none'
};


//form input for theme
formE1.on('submit', handleFormSubmit);

//start button event listener
startButton.addEventListener("click", startGame )