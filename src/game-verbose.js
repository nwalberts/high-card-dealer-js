const Deck = require("./Deck.js")
const Card = require("./Card.js")
const Hand = require("./Hand.js")

console.log("Welcome to the High Card Dealer")

let deckOne = new Deck
deckOne.buildDeck()
// create a deck object using the Deck class, then add 36 cards to its this.cards property


let handOne = []
handOne.push(deckOne.deal())
handOne.push(deckOne.deal())
handOne.push(deckOne.deal())
handOne.push(deckOne.deal())
// create an array to represent a hand
// take one card from deck and add it to this array four times

let handTwo = []
handTwo.push(deckOne.deal())
handTwo.push(deckOne.deal())
handTwo.push(deckOne.deal())
handTwo.push(deckOne.deal())

let sumOne = 0
handOne.forEach((card) => {
  sumOne += parseInt(card.rank)
})
// iterate over each card, and take the number value of its rank and sum it

let sumTwo = 0
handTwo.forEach((card) => {
  sumTwo += parseInt(card.rank)
})

console.log("Player One's hand value")
console.log(sumOne)
console.log("Player Two's hand value")
console.log(sumTwo)

if (sumOne > sumTwo){
    console.log("Player one wins!")
} else if (sumTwo > sumOne) {
  console.log("Player two wins!")
} else {
  console.log("Tie!")
}
