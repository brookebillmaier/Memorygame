// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store the cards in play
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
  console.log("User flipped " + cards[cardId]);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // checkForMatch function
    checkForMatch();
  }
};



// Call the flipCard function, passing in an index as the argument
flipCard(0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);