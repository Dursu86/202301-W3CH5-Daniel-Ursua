import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
