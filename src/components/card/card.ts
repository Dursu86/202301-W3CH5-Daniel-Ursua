/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
            <section class="card">
              <div class="card__img"><img src="" alt="" width="200px"></div>
              <p class="card__name"></p>
            </section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
