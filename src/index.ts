/* eslint-disable no-new */
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { POKEMONS } from './mocks/mocks';

new Header('.root');
new Card('.header', POKEMONS[0]);
new Footer('.root');
