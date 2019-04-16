const _ = require("lodash")
let Card = require("./Card.js")

// const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
const suits = ["♦", "♣", "♠", "♥"]
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// here, I commented out the version of the ranks with faces for simplicity

class Deck {
  constructor() {
    this.cards = []
  }
  // this deck is created with no arguments, but does have an empty `this.cards` array by default

  buildDeck() {
    let cards = []

    suits.forEach(suit => {
      ranks.forEach(rank => {
        cards.push(new Card(rank, suit))
      })
    })
    // for each suit and rank, create a card, and add that card to the `cards` array

    this.cards = _.shuffle(cards)
    // assign a shuffled version of our newly created cards to `this.cards`
  }

  deal() {
    return this.cards.pop()
    // remove one card from the end of this.cards and return it
  }

  dealFour() {
    let dealtCards = []
    dealtCards.push(this.cards.pop())
    dealtCards.push(this.cards.pop())
    dealtCards.push(this.cards.pop())
    dealtCards.push(this.cards.pop())
    return dealtCards
    // remove four cards from the end of this.cards and return it in an array
  }
}

module.exports = Deck
