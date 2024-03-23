import { Card } from "./card";

export class Deck {
  cards: Card[];
  cardsById: Record<string, Card>;
  
  constructor(props) {
    this.cards = props.cards;
    
    this.cardsById = {};
    for(let card of this.cards) {
      this.cardsById[card.id] = card;
    }
  }
  
  getCard(id) {
    let card = this.cardsById[id];
    if(!card) throw new Error("No card with id " + id);
    else return card;
  }
}