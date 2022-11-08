var cards = document.querySelectorAll(".memory-card");

function flipCard() {
    console.log(flipCard);
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click',flipCard));