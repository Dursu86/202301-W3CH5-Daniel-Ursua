/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pokepedia') {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
           <footer>
           <img src="../../pikachu.png" alt="A draw of the Pikachu's face" />
            </footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}

<footer>
  <img src="../../pikachu.png" alt="" />
</footer>;
