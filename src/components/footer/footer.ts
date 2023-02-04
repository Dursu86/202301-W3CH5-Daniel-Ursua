/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
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
