// Create an array 
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


// An array to store the cards
var cardsInPlay = [];

// check for  match
var checkForMatch = function () {
  // Do cards match/feedback
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
};

// user flipping a card
var flipCard = function (cardId) {

  // Display the card flipped
  console.log("User flipped " + cards[cardId].rank);

  // Add card to array
  cardsInPlay.push(cards[cardId].rank);

  //image path
  console.log(cards[cardId].cardImage)
  //suit
  console.log(cards[cardId].suit)

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // checkForMatch function
    checkForMatch();
    //next flip
    cardsInPlay = [];
  }
};


// create board
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    // back of card image
    cardElement.setAttribute('src', 'images/back.png');

    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

  }

}

createBoard();