import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('It should be in the document', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header);
  });
  test('It render the title in the document', () => {
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
  test('It render an image in the document', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
  test('It render this text in the document', () => {
    const p = screen.getByText('Learn it all!');
    expect(p).toBeInTheDocument();
  });
});
