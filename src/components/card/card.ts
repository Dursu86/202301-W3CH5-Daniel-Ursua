/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemon';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public pokemon: PokemonStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
    this.pokemon = { ...pokemon };
  }

  private createTemplate() {
    return `
              <li class="card"><img src="${this.pokemon.img}" alt="" width="100px" class="card__img">
              <p class="card__name">${this.pokemon.name}</p><button class= "card__button">Catch it!</button></li>
    `;
  }
}
