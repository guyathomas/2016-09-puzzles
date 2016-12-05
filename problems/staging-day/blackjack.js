const Game = () => {
  this.players = [];
  this.newPlayer = () => {
    this.players.push(new Player());
  };
  this.evaulateGame = () => {
   this.players.forEach((player, i) => {
    if (player.evaluate > 21) {
     console.log('Player ' + i + ' is bust');
   }
 });
 };

};
const Player = () => {
  this.hand = [];
  this.cards = ['ace', 1,2,3,4,5,6,7,8,9,'jack', 'queen', 'king'];
  this.hit = () => {
    const randIndex = Math.random() * cards.length;
    this.hand.push(cards[ranIndex]);
  };
  this.evaluate = () => {
    let score = 0;
    let aces = 0;

      //Add the score up
      for (var i = 0; i < this.hand.length; i++) {
        const thisCard = this.hand[i];
        if (thisCard === 'ace') {
          aces++;
          score += 11;
        } else {
          if (thisCard.isInteger()) {
           score += thisCard;
         } else {
           score += 10;
         }
       }
     }

      //If they are above 21 but can convert aces into ones, then do this until not bust
      if (score > 21 && aces > 0) {
        while (aces > 0) {
         if (score > 21) {
           score -= 10;
           aces--;
         } else {
           break;
         }
       }
     }
     return score;
   };
 };