export class Card {
  id: string;
  front: string;
  back: string;
  
  constructor(props) {
    Object.assign(this, props);
  }
}