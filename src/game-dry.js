const Deck = require("./Deck.js")
const Card = require("./Card.js")
const Hand = require("./Hand.js")

console.log("Welcome to the High Card Dealer")

let deckOne = new Deck
deckOne.buildDeck()

let handOne = new Hand(deckOne.dealFour())
console.log(`Player One's hand value is ${handOne.calculateHandTotal()}`)

let handTwo = new Hand(deckOne.dealFour())
console.log(`Player Two's hand value is ${handTwo.calculateHandTotal()}`)

if (handOne.calculateHandTotal() > handTwo.calculateHandTotal()){
  console.log("Player one wins!")
} else if (handOne.calculateHandTotal() < handTwo.calculateHandTotal()) {
  console.log("Player two wins!")
} else {
  console.log("Tie!")
}
