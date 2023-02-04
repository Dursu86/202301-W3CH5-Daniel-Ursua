// eslint-disable-next-line no-unused-vars
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given Card component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Card('slot');
    expect(element).toBeInstanceOf(Card);
  });
});
