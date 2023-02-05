import { Pokemon } from './pokemon';

describe('Given pokemon model component', () => {
  test('It should create new object', () => {
    const element = new Pokemon('Pepe', 'Pepe photo');
    expect(element).toBeInstanceOf(Pokemon);
  });
});
