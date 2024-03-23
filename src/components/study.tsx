import { Component, ComponentChild, h, Fragment } from "preact";
import { Deck } from "../model/deck";
import { CardComponent } from "./card";

export class StudyProps {
  deck: Deck
}

export class StudyState {
  currentCard: string | undefined;
  toStudy: string[];
  correct: string[];
  wrong: string[]
}

export class StudyComponent extends Component<StudyProps, StudyState> {
  state = {
    currentCard: this.props.deck.cards[0].id,
    toStudy: Object.keys(this.props.deck.cardsById),
    correct: [],
    wrong: []
  };
  
  
  skip = () => {
    this.setState(state => {
      return {
        currentCard: state.toStudy.pop(),
        toStudy: state.toStudy,
        correct: state.correct,
        wrong: state.wrong
      }
    });
  }

  render(props: StudyProps, state: StudyState): ComponentChild {
    //ugh
    console.log(props, state);
    
    return <>
      <CardComponent card={props.deck.getCard(state.currentCard)} />
      <button onClick={this.skip}>skip</button>
    </>
  }

}