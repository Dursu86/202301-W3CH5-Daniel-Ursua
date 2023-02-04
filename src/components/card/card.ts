/* eslint-disable no-unused-vars */
import { Pokemon, PokemonStructure } from '../../models/pokemon';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public pokemon: PokemonStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
    this.pokemon = { ...pokemon };
  }

  private createTemplate() {
    return `
            <section class="card">
              <div class="card__img"><img src="${this.pokemon.img}" alt="" width="200px"></div>
              <p class="card__name">${this.pokemon.name}</p>
            </section>
    `;
  }
}
