/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  private createTemplate() {
    return `
            <header class="header">
              <div class="header__top"><img src="../../pokemon-logo.svg" alt="Pokémon logo" width="350px">
              <h1 class="header__title"> Pokepedia </h1>
                <p class="header__claim">Learn it all!</p></div>
              <nav class="header__nav">
                <ul class="menu">
                  <li class="menu__nav"><a href="#">Home</li>
                  <li class="menu__nav"><a href="#">Favorite list</li>
                </ul>
              </nav>
            </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
