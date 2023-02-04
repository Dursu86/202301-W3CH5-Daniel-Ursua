// eslint-disable-next-line no-unused-vars
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { POKEMONS } from '../../mocks/mocks';
import { PokemonStructure } from '../../models/pokemon';
import { Card } from './card';

describe('Given Card component', () => {
  const mockPokemon: PokemonStructure = POKEMONS[0];
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Card('slot', mockPokemon);
    expect(element).toBeInstanceOf(Card);
  });
});
