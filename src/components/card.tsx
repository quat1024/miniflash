import { Component, ComponentChild, h } from "preact";
import { Card } from "../model/card";

export class CardProps {
  card: Card
}

export class CardState {
  flipped: boolean;
}

export class CardComponent extends Component<CardProps, CardState> {
  state = {flipped: false};
  
  handleClick = () => {
    this.setState({flipped: !this.state.flipped});
  }
  
  render(props: CardProps, state: CardState): ComponentChild {
    return <div onClick={this.handleClick}>
      <h2>{state.flipped ? props.card.back : props.card.front}</h2>
    </div>
  }
  
}
