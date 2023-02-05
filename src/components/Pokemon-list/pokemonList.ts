/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Card } from '../card/card';
import { Component } from '../component/component';
import { PokemonStructure } from '../../models/pokemon';
import './pokemonList.scss';

export class PokemonList extends Component {
  constructor(public selector: string, public pokemonList: PokemonStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemonList.forEach((item) => {
      new Card('.pokemons__grid', item);
    });
  }

  createTemplate() {
    return `
    <section class="pokemons">
      <ul class="pokemons__grid">
      </ul>
    </section>
    `;
  }
}
