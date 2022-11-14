
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
  
//     cardArr = array;
// }

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
};
fetchPokemon();


//Random Cat Image
//100 possible choices
const fetchCats = () => {
    const promises = [];
    const url = `https://api.thecatapi.com/v1/images/search?limit=6`;
    promises.push(fetch(url).then((res) => res.json()));
    Promise.all(promises).then((results) => {
        console.log(results);
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
};
fetchCats();

// Flipping cards
const cards = document.querySelectorAll(".memory-card");

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
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