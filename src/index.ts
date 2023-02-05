/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { PokemonList } from './components/Pokemon-list/pokemonList';
import { POKEMONS } from './mocks/mocks';

new Header('main');
new PokemonList('main', POKEMONS);
new Footer('main');
