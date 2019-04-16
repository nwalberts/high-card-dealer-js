class Hand {
  constructor(arrayOfCards){
    this.cards = arrayOfCards
  }
  // when this hand is created, it will be created with an array of four cards!
  // these cards will be stowed on the `this.cards` property

  calculateHandTotal(){
    // this method is called on a hand that has already been created

    let total = 0
    // create a variable to hold the running total of the hand value

    this.cards.forEach((card) => {
      total += parseInt(card.rank)
    })
    // iterate over each card, and at its number value to the total 

    return total
  }

}

module.exports = Hand
