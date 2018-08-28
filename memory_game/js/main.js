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
  // Do cards match & feedback
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
};

// user flipping a card
var flipCard = function (cardId) {

  // Display the card the user just flipped
  console.log("User flipped " + cards[cardId].rank);

  // Add card to array of cards that are in play
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



// Call the flipCard function, passing in an index as the argument
flipCard(0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);