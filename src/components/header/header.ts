/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
            <header class="header">
              <div class="header__logo"><img src="../../pokemon-logo.svg" alt="Pokémon logo"></div>
              <h1 class="header__title> Pokepedia </h1>
                <p class="header__claim">Learn it all!</p>
              <nav class="header_nav">
                <ul class="menu">
                  <li class="menu__nav">Home</li>
                  <li class="menu__nav">Favorite list</li>
                  <li class="menu__nav">Poke details</li>
                </ul>
              </nav>
            </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
