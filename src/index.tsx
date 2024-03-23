import { createElement, h, render, Component, Attributes, ComponentChild, ComponentChildren, Ref } from 'preact';

import { CardComponent } from './components/card';
import { Card } from './model/card';
import { Deck } from './model/deck';
import { StudyComponent } from './components/study';

let card1 = new Card({
  "front": "FRONT 2",
  "back": "BACK 2",
  "id": "FOO"
})

let card2 = new Card({
  front: "FRONT 2",
  back: "BACK 2",
  id: "Foo2"
})

let deck = new Deck({cards: [card1, card2]});


render(<StudyComponent deck={deck} />, document.body);