/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pokepedia') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
            <header class="header">
              <div class="header__logo"><img src="../../pokemon-logo.svg" alt="Pokémon logo"></div>
              <h1 class="header__title>${this.title}</h1>
                <p role="note" aria-label="info" class="header__claim">Learn it all!</p>
              <nav class="header_nav">
                <ul class="menu">
                  <li class="menu__home">Home</li>
                  <li class="menu__list">Favorite list</li>
                  <li class="menu__details">Poke details</li>
                </ul>
              </nav>
            </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
